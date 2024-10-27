
export default function Item(item) {
    return (
      <div>
        <p>name: {item.name}</p>
        <p>quantity: {item.quantity}</p>
        <p>category: {item.category}</p>
      </div>
    );
  }