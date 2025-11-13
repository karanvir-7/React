import { CartState } from "./cart";
import { User } from "./user";

interface UserSliceState {
  user: User;
}
export interface State  {
  cartSlice: CartState;
  userSlice: UserSliceState;
}