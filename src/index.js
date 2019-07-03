import createOrderTransaction from "./order/createOrder.transaction";
import {performTransactionWithPromises} from "./orchestrator.promise";

(async function() {
  const result = await performTransactionWithPromises(createOrderTransaction);
  console.log(result);
})();
