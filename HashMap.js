class HashMap {
  constructor(size = 16) {
    // Initialize the buckets with empty arrays
    this.buckets = Array(size)
      .fill(null)
      .map(() => []);
    this.size = size;
    this.capacity = 0.75;
    this.count = 0;
  }

  // hash(key) takes a key and produces a hash code with it.
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  // set(key, value) takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten or we can say that we update the key’s value
  set(key, value) {
    const hash = this.hash(key);
    const index = hash % this.size;
    const bucket = this.buckets[index];
    bucket.push({ key, value });

    console.log(this.capacity);
    console.log(this.length() / this.size);
  }

  // get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
  get(key) {
    const hash = this.hash(key);
    const index = hash % this.size;
    const bucket = this.buckets[index];

    for (let entry of bucket) {
      if (entry.key === key) {
        return entry.value;
      }
    }
    return null;
  }

  // has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
  has(key) {
    const hash = this.hash(key);
    const index = hash % this.size;
    const bucket = this.buckets[index];

    for (let entry of bucket) {
      if (entry.key === key) {
        return true;
      }
    }
    return false;
  }

  // remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
  remove(key) {
    if (this.has(key)) {
      const hash = this.hash(key);
      const index = hash % this.size;
      let bucket = this.buckets[index];
      bucket = bucket.filter((entry) => {
        return entry.key != key;
      });
    } else {
      return false;
    }
  }

  // length() returns the number of stored keys in the hash map.
  length() {
    return Object.values(this.buckets)
      .map((element) => (element != null ? element.key : null))
      .filter((key) => key != null).length;
  }

  // clear() removes all entries in the hash map.
  clear() {
    this.buckets = Array(size).fill(null);
  }

  //keys() returns an array containing all the keys inside the hash map.

  //  return this.buckets.flat().map(entry => entry.key);
  keys() {
    return Object.values(this.buckets)
      .map((element) => (element != null ? element.key : null))
      .filter((key) => key != null);
  }

  // values() returns an array containing all the values.

  // return this.buckets.flat().map(entry => [entry.key, entry.value]);
  values() {
    return Object.values(this.buckets)
      .map((element) => (element != null ? element.value : null))
      .filter((value) => value != null);
  }

  // entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
  entries() {}
}

export default HashMap;
