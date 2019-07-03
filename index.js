import createOrderTransaction from "./order/createOrder.transaction";
import {performTransactionWithPromises} from "./orchestrator.promise";

(async function() {
  const result = performTransactionWithPromises(createOrderTransaction);
  console.log(result);
})();