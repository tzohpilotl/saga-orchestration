import { createDelivery } from "../delivery/delivery.service";
import { createPayment } from "../payment/payment.service";

/* TODO: Move this operation to a more semantic position, it's confusing for
*   it to be at the same level as the other entities but this has the notion of
*   operation while the others have services.
*/

export default {
  name: "createOrder",
  operations: [createDelivery, createPayment],
};