import { 
  type User, 
  type InsertUser, 
  type Inquiry, 
  type InsertInquiry,
  type Testimonial,
  type InsertTestimonial,
  type Notice,
  type InsertNotice,
  type GalleryItem,
  type InsertGalleryItem
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
  
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  getNotices(): Promise<Notice[]>;
  createNotice(notice: InsertNotice): Promise<Notice>;
  
  getGalleryItems(): Promise<GalleryItem[]>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private inquiries: Map<string, Inquiry>;
  private testimonials: Map<string, Testimonial>;
  private notices: Map<string, Notice>;
  private galleryItems: Map<string, GalleryItem>;

  constructor() {
    this.users = new Map();
    this.inquiries = new Map();
    this.testimonials = new Map();
    this.notices = new Map();
    this.galleryItems = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample testimonials
    const sampleTestimonials: Testimonial[] = [
      {
        id: randomUUID(),
        parentName: "Rajesh Patel",
        relation: "Parent of Arjun (Class 10)",
        feedback: "My son's grades improved dramatically after joining Rama Coaching. The teachers are very dedicated and provide individual attention to each student.",
        rating: "5",
        isVisible: true,
      },
      {
        id: randomUUID(),
        parentName: "Sunita Mehta",
        relation: "Parent of Priya (Class 8)",
        feedback: "The computer classes here are excellent. My daughter learned so much about technology and now she's confident with computers.",
        rating: "5",
        isVisible: true,
      },
      {
        id: randomUUID(),
        parentName: "Anil Kumar",
        relation: "Parent of Rohit (Class 6)",
        feedback: "Mrs. Pushpa and her team are amazing. They really care about each child's progress and provide excellent study materials for free.",
        rating: "5",
        isVisible: true,
      },
    ];

    // Sample notices
    const sampleNotices: Notice[] = [
      {
        id: randomUUID(),
        title: "Admission Open for 2024 Session",
        content: "Admissions are now open for all classes from Nursery to 12th. Early bird discount available till December 31st.",
        type: "URGENT",
        date: "Dec 15, 2023",
        isVisible: true,
      },
      {
        id: randomUUID(),
        title: "Winter Break Schedule",
        content: "Classes will be closed from December 25th to January 5th for winter break. Regular classes resume from January 6th.",
        type: "UPDATE",
        date: "Dec 12, 2023",
        isVisible: true,
      },
      {
        id: randomUUID(),
        title: "Monthly Test Results",
        content: "November monthly test results are now available. Parents can collect report cards from the office during office hours.",
        type: "EXAM",
        date: "Dec 10, 2023",
        isVisible: true,
      },
    ];

    // Sample gallery items
    const sampleGalleryItems: GalleryItem[] = [
      {
        id: randomUUID(),
        title: "Interactive Teaching",
        description: "Our expert teachers engage students with interactive methods",
        imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "classroom",
        isVisible: true,
      },
      {
        id: randomUUID(),
        title: "Study Materials",
        description: "Comprehensive study materials provided free of cost",
        imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "classroom",
        isVisible: true,
      },
      {
        id: randomUUID(),
        title: "Computer Lab",
        description: "State-of-the-art computer lab for practical learning",
        imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "classroom",
        isVisible: true,
      },
      {
        id: randomUUID(),
        title: "Group Study",
        description: "Collaborative learning environment for better understanding",
        imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "activities",
        isVisible: true,
      },
      {
        id: randomUUID(),
        title: "Practical Learning",
        description: "Hands-on experiments and demonstrations",
        imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "activities",
        isVisible: true,
      },
      {
        id: randomUUID(),
        title: "Success Stories",
        description: "Our students achieving excellent results year after year",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "achievements",
        isVisible: true,
      },
    ];

    sampleTestimonials.forEach(t => this.testimonials.set(t.id, t));
    sampleNotices.forEach(n => this.notices.set(n.id, n));
    sampleGalleryItems.forEach(g => this.galleryItems.set(g.id, g));
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = randomUUID();
    const inquiry: Inquiry = { 
      ...insertInquiry, 
      id, 
      createdAt: new Date().toISOString() as any
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(t => t.isVisible);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getNotices(): Promise<Notice[]> {
    return Array.from(this.notices.values()).filter(n => n.isVisible);
  }

  async createNotice(insertNotice: InsertNotice): Promise<Notice> {
    const id = randomUUID();
    const notice: Notice = { ...insertNotice, id };
    this.notices.set(id, notice);
    return notice;
  }

  async getGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values()).filter(g => g.isVisible);
  }

  async createGalleryItem(insertGalleryItem: InsertGalleryItem): Promise<GalleryItem> {
    const id = randomUUID();
    const galleryItem: GalleryItem = { ...insertGalleryItem, id };
    this.galleryItems.set(id, galleryItem);
    return galleryItem;
  }
}

export const storage = new MemStorage();
