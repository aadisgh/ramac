import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, MessageCircle, Clock, Send, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertInquirySchema } from "@shared/schema";

const formSchema = insertInquirySchema.extend({
  studentName: z.string().min(2, "Student name must be at least 2 characters"),
  parentName: z.string().min(2, "Parent name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      class: "",
      parentName: "",
      phone: "",
      timing: "",
      message: "",
    },
  });

  const createInquiry = useMutation({
    mutationFn: (data: FormValues) => apiRequest("POST", "/api/inquiries", data),
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted Successfully!",
        description: "We will contact you soon to discuss admission details.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/inquiries"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    createInquiry.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to give your child the best education? Contact us today for admissions and inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <h3 className="font-poppins font-semibold text-2xl mb-6">Contact Information</h3>
              
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <MapPin className="text-blue-600" size={20} />
                    </div>
                    <h4 className="font-semibold text-lg text-gray-800">Our Location</h4>
                  </div>
                  <div className="text-gray-600">
                    <p className="font-medium">123 Education Street</p>
                    <p>Academic Zone, City</p>
                    <p>Pin Code: 123456</p>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <Phone className="text-blue-600" size={20} />
                    </div>
                    <h4 className="font-semibold text-lg text-gray-800">Phone Numbers</h4>
                  </div>
                  <div className="text-gray-600 space-y-1">
                    <p className="font-medium">+91 98765 43210</p>
                    <p>+91 87654 32109</p>
                    <p className="text-sm">Landline: 0123-456789</p>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <Mail className="text-blue-600" size={20} />
                    </div>
                    <h4 className="font-semibold text-lg text-gray-800">Email Address</h4>
                  </div>
                  <div className="text-gray-600 space-y-1">
                    <p className="font-medium">info@ramacoaching.com</p>
                    <p>admission@ramacoaching.com</p>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <Clock className="text-blue-600" size={20} />
                    </div>
                    <h4 className="font-semibold text-lg text-gray-800">Office Hours</h4>
                  </div>
                  <div className="text-gray-600 space-y-1">
                    <p className="font-medium">Monday - Saturday</p>
                    <p>8:00 AM - 7:00 PM</p>
                    <p className="font-medium">Sunday: By Appointment</p>
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div className="mt-8">
                  <h4 className="font-semibold text-lg text-gray-800 mb-4">Quick Actions</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                      <a href="tel:+919876543210">
                        <Phone className="mr-2" size={16} />
                        Call Now
                      </a>
                    </Button>
                    <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2" size={16} />
                        WhatsApp Chat
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="mx-auto mb-4" size={48} />
                <p className="font-medium">Interactive Map</p>
                <p className="text-sm">Google Maps integration will be embedded here</p>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl hover-lift">
              <h3 className="font-poppins font-semibold text-2xl mb-6">Admission Inquiry Form</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="studentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter student name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="class"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Class/Grade *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Class" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="nursery">Nursery</SelectItem>
                              <SelectItem value="lkg">LKG</SelectItem>
                              <SelectItem value="ukg">UKG</SelectItem>
                              <SelectItem value="1">Class 1</SelectItem>
                              <SelectItem value="2">Class 2</SelectItem>
                              <SelectItem value="3">Class 3</SelectItem>
                              <SelectItem value="4">Class 4</SelectItem>
                              <SelectItem value="5">Class 5</SelectItem>
                              <SelectItem value="6">Class 6</SelectItem>
                              <SelectItem value="7">Class 7</SelectItem>
                              <SelectItem value="8">Class 8</SelectItem>
                              <SelectItem value="9">Class 9</SelectItem>
                              <SelectItem value="10">Class 10</SelectItem>
                              <SelectItem value="11">Class 11</SelectItem>
                              <SelectItem value="12">Class 12</SelectItem>
                              <SelectItem value="navodaya">Navodaya Prep</SelectItem>
                              <SelectItem value="computer">Computer Classes</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="parentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Parent Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter parent name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="timing"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Batch Timing</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value || ''}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Timing" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="morning">Morning Batch</SelectItem>
                            <SelectItem value="evening">Evening Batch</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any specific requirements or questions?" 
                            className="resize-none"
                            rows={4}
                            {...field}
                            value={field.value || ''}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover-lift hover-glow transition-all duration-300 border-0 h-auto animate-pulse-glow"
                    disabled={createInquiry.isPending}
                  >
                    <Send className="mr-2" size={20} />
                    {createInquiry.isPending ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                </form>
              </Form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-600 mb-4">Or reach us directly via</p>
                <div className="flex justify-center space-x-4">
                  <Button asChild className="bg-primary hover:bg-primary/90 border-0">
                    <a href="tel:+919876543210">
                      <Phone className="mr-2" size={16} />
                      Call Now
                    </a>
                  </Button>
                  <Button asChild className="bg-success hover:bg-success/90 border-0">
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2" size={16} />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
