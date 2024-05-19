export interface Product {
  _id: string;
  name: string;
  categoryId: string;
  quantity: string;
  price: string;
  description: string[];
  images: string[];
  isStock: boolean;
  stock: number;
  isSubscribeAvailable: boolean;
  mrp: string;
  promotionAvail: boolean;
  promotionPercentage: number;
  disableProduct: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface Payment {
  _id: string;
  userId: string;
  cartId: string;
  razorPay_OrderId: string;
  razorPay_PaymentId: string | null;
  paymentStatus: string;
  amount: string;
  billingId: string | null;
  orderId: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ProductCategory {
  _id: string;
  name: string[];
  imgURL: string[];
  sequenceId: number;
  promotionAvail: boolean;
  promotionPercentage: number;
  __v: number;
}

export interface Address {
  _id: string;
  userId: string;
  pincode: number;
  blockName: string;
  flatPlot: string;
  colonyName: string;
  areaName: string;
  state: string;
  city: string;
  communityName: string;
}

export interface Billing {
  subTotals: number;
  deliveryCharges: number;
  platformFee: number;
  couponDiscount: number;
  totalBill: number;
}

export interface Coupon {
  _id: string;
  description: string;
  couponCode: string;
  discount: number;
  couponType: string;
  expiresIn: number;
  limit: number;
  minOrderValue: number;
}

export interface OrderedItem {
  product: Product;
  quantity: number;
  isSubscription: boolean;
  startDate: string;
  deliveryDate: string;
  deliveryStatus: string;
  cancelled: boolean;
  _id: string;
  orderActions: any[]; // You may want to replace `any[]` with a more specific type if possible
}

export interface Order {
  _id: string;
  userID: string;
  orderId: string;
  orderPlaced: string;
  couponId: string;
  addressId: Address;
  paymentId: Payment;
  billingId: string | null;
  orderedItems: OrderedItem[];
  createdAt: string;
  updatedAt: string;
}
