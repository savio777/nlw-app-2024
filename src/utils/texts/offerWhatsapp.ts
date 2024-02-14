import { IProductCartData } from "@/stores/cart-store";

export const messageText = (
  products: IProductCartData[],
  address: string,
  totalValue: string
) => {
  let message = `NOVO PEDIDO: \n`;

  message += `No endereço: ${address}\n`;

  message += `Valor total: ${totalValue}\n\nLista de produtos:\n`;

  products.map(
    (product) => (message += `${product.title} - ${product.quantity}x\n`)
  );

  return message;
};

export const numberWhatsappMock = "+559999999999999";
