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

    for (let entry of bucket) {
      if (entry.key === key) {
        entry.value = value;
        return;
      }
    }
    bucket.push({ key, value });

    const loadFactor = this.length() / this.size;
    if (loadFactor > this.capacity) {
      this.grow();
    }
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
      this.buckets[index] = bucket;
    } else {
      return false;
    }
  }

  // length() returns the number of stored keys in the hash map.
  length() {
    return this.buckets.flat().length;
  }

  // clear() removes all entries in the hash map.
  clear() {
    this.buckets = Array(this.size)
      .fill(null)
      .map(() => []);
  }

  //keys() returns an array containing all the keys inside the hash map.
  keys() {
    return this.buckets.flat().map((entry) => entry.key);
  }

  // values() returns an array containing all the values.
  values() {
    return this.buckets.flat().map((entry) => entry.value);
  }

  // entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
  entries() {
    return this.buckets.flat().map((entry) => [entry.key, entry.value]);
  }

  grow() {
    this.size = this.size * 2;
    const entries = this.entries();
    this.clear();

    for (let entry of entries) {
      this.set(entry[0], entry[1]);
    }
  }
}

export default HashMap;
