import { Product } from "./data";

export interface AuthRDXInterface {
  isLoggedIn: boolean;
  authToken: string;
  phoneNumber: string;
}

export interface CategoryRDXInterface {
  activeCategoryId: string;
  name: string;
}

interface SubscriptionTimelineItemInterface {
  date: string;
  product: Product;
  items: number;
}

export interface CartItem {
  /**
   * This interface is related item in cart ,not cart
   * itself, so it represents the actual item in cart.
   */
  product: Product;
  items: number;
  isSubscription: boolean;
  subscriptionType?: "daily" | "weekly" | "alternate";
  startDate?: string;
  subscriptionTimeline?: SubscriptionTimelineItemInterface[];
}

export interface CartRDXInterface {
  /**
   * This is the cart interface ,items and other cart
   * related features here .
   */
  products: CartItem[];
  addressId: string;
  couponId: string;
  netPayable: number;
}

export interface OrderRDXInterface {
  orderID: string;
  order_Id: string;
  orderPlaced: string;
}

export interface StoreInterface {
  auth: AuthRDXInterface;
  category: CategoryRDXInterface;
  cart: CartRDXInterface;
  order: OrderRDXInterface;
}
