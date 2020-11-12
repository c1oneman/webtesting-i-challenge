module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (
    !item ||
    typeof item.name === "undefined" ||
    typeof item.durability === "undefined" ||
    typeof item.enhancement === "undefined"
  ) {
    throw new Error("Must pass item with Name, Durability, and Enhancement");
  } else if (item.durability < 0 || item.durability > 100) {
    throw new Error("Item Durabilty must be a value between 0 and 100");
  } else if (item.enhancement < 0 || item.enhancement > 20) {
    throw new Error("Item Enhancement must be a value between 0 and 20");
  } else {
    return {
      ...item,
      enhancement:
        item.enhancement < 20
          ? item.enhancement + 1
          : (item.enhancement = 20 ? item.enhancement : item.enhancement)
    };
  }
}

function fail(item) {
  if (
    !item ||
    typeof item.name === "undefined" ||
    typeof item.durability === "undefined" ||
    typeof item.enhancement === "undefined"
  ) {
    throw new Error("Must pass item with Name, Durability, and Enhancement");
  } else if (item.durability < 0 || item.durability > 100) {
    throw new Error("Item Durabilty must be a value between 0 and 100");
  } else if (item.enhancement < 0 || item.enhancement > 20) {
    throw new Error("Item Enhancement must be a value between 0 and 20");
  } else {
    return {
      ...item,
      durability:
        item.enhancement < 15
          ? item.durability - 5
          : item.enhancement >= 15
          ? item.durability - 10
          : item.durability,
      enhancement:
        item.enhancement > 16 ? item.enhancement - 1 : item.enhancement
    };
  }
}

function repair(item) {
  if (
    !item ||
    typeof item.name === "undefined" ||
    typeof item.durability === "undefined" ||
    typeof item.enhancement === "undefined"
  ) {
    throw new Error("Must pass item with Name, Durability, and Enhancement");
  } else if (item.durability < 0 || item.durability > 100) {
    throw new Error("Item Durabilty must be a value between 0 and 100");
  } else if (item.enhancement < 0 || item.enhancement > 20) {
    throw new Error("Item Enhancement must be a value between 0 and 20");
  } else {
    return { ...item, durability: 100 };
  }
}

function get(item) {
  if (
    !item ||
    typeof item.name === "undefined" ||
    typeof item.durability === "undefined" ||
    typeof item.enhancement === "undefined"
  ) {
    throw new Error("Must pass item with Name, Durability, and Enhancement");
  } else if (item.durability < 0 || item.durability > 100) {
    throw new Error("Item Durabilty must be a value between 0 and 100");
  } else if (item.enhancement < 0 || item.enhancement > 20) {
    throw new Error("Item Enhancement must be a value between 0 and 20");
  } else if (item.enhancement === 0) {
    return item;
  } else {
    return { ...item, name: `[+${item.enhancement}] ${item.name}` };
  }
}