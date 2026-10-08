import { Component, signal, computed, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BUSINESS_CONFIG, ServiceItem, GalleryItem, FaqItem } from './site-config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly sanitizer = inject(DomSanitizer);

  // Business Configuration
  readonly config = BUSINESS_CONFIG;

  // Safe Google Map Embed URL
  readonly safeMapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.config.googleMaps.embedUrl
  );

  // Navigation State
  isMobileMenuOpen = signal(false);
  isScrolled = signal(false);
  
  // Gallery Filter & Lightbox State
  selectedGalleryCategory = signal<'all' | 'repair' | 'service' | 'installation' | 'cleaning'>('all');
  activeLightboxItem = signal<GalleryItem | null>(null);

  // FAQ Accordion State
  openFaqIndex = signal<number | null>(0);

  // Quick Service Inquiry State
  selectedAcType = signal<string>('Split AC');
  selectedServiceType = signal<string>('AC Servicing & Jet Cleaning');
  customNote = signal<string>('');

  // Computed Gallery Filter
  filteredGallery = computed(() => {
    const category = this.selectedGalleryCategory();
    if (category === 'all') {
      return this.config.gallery;
    }
    return this.config.gallery.filter(item => item.category === category);
  });

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 40);
  }

  @HostListener('window:keydown.escape', [])
  onEscapeKey() {
    this.closeLightbox();
    this.closeMobileMenu();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  setGalleryCategory(category: 'all' | 'repair' | 'service' | 'installation' | 'cleaning') {
    this.selectedGalleryCategory.set(category);
  }

  openLightbox(item: GalleryItem) {
    this.activeLightboxItem.set(item);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.activeLightboxItem.set(null);
    document.body.style.overflow = '';
  }

  nextLightbox() {
    const current = this.activeLightboxItem();
    if (!current) return;
    const items = this.filteredGallery();
    const currentIndex = items.findIndex(i => i.id === current.id);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % items.length;
      this.activeLightboxItem.set(items[nextIndex]);
    }
  }

  prevLightbox() {
    const current = this.activeLightboxItem();
    if (!current) return;
    const items = this.filteredGallery();
    const currentIndex = items.findIndex(i => i.id === current.id);
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      this.activeLightboxItem.set(items[prevIndex]);
    }
  }

  toggleFaq(index: number) {
    this.openFaqIndex.update(current => current === index ? null : index);
  }

  // Pre-filled WhatsApp direct links
  getGeneralWhatsAppUrl(): string {
    const text = encodeURIComponent(this.config.whatsappDefaultMsg);
    return `https://wa.me/${this.config.whatsappNumber}?text=${text}`;
  }

  getServiceWhatsAppUrl(serviceName: string): string {
    const msg = `Hello New Air Solution, I need "${serviceName}" at my location in Gorakhpur. Please share availability and details.`;
    return `https://wa.me/${this.config.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }

  getGalleryWhatsAppUrl(item: GalleryItem): string {
    const msg = `Hello New Air Solution, I saw your work "${item.title}" on your website and would like to book similar service for my AC.`;
    return `https://wa.me/${this.config.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }

  getCustomInquiryWhatsAppUrl(): string {
    let msg = `Hello New Air Solution, I want to book AC Service:\n`;
    msg += `• AC Type: ${this.selectedAcType()}\n`;
    msg += `• Service Needed: ${this.selectedServiceType()}\n`;
    if (this.customNote().trim()) {
      msg += `• Note / Issue: ${this.customNote().trim()}\n`;
    }
    msg += `• Location: Gorakhpur\n\nPlease let me know when a technician can visit.`;
    return `https://wa.me/${this.config.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }
}
