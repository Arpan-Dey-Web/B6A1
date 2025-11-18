TypeScript Deep Dive – Blog Post (Bangla)
🟦 1️⃣ Interface বনাম Type – পার্থক্য (TypeScript)

TypeScript-এ interface এবং type alias—দুটোই object structure নির্ধারণের জন্য ব্যবহৃত হয়। কিন্তু এদের ক্ষমতা, ব্যবহারক্ষেত্র এবং flexibility ভিন্ন।

নিচে বিস্তারিতভাবে পার্থক্য ব্যাখ্যা করা হলো।

🔹 Extension / Inheritance
Interface → সহজভাবে extends ব্যবহার করে
interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}

Type → intersection (&) ব্যবহার করে
type UserType = {
  name: string;
};

type AdminType = UserType & {
  role: string;
};


✔ Interface inheritance বেশি readable
✔ Type intersection আরও flexible

🔹 Declaration Merging (Only for Interface)

Interface একাধিকবার ডিক্লেয়ার করলে TypeScript স্বয়ংক্রিয়ভাবে merge করে।

interface Person {
  name: string;
}

interface Person {
  age: number;
}


Result:

// { name: string; age: number }


❌ Type alias কখনো merge হয় না।

🔹 Usage Flexibility
Type alias বেশি flexible:

*primitive
*union
*tuple
*function type
*template literal type
*mapped type

সবকিছুতেই ব্যবহার করা যায়।

type ID = string | number;
type Pair = [string, number];

Interface → শুধুমাত্র object structure-এর জন্য বেশি উপযোগী
interface User {
  name: string;
  age: number;
}

🔹 Mapped / Computed Types (Only Type)
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};


Interface দিয়ে এভাবে advanced mapping সম্ভব নয়।

🔹 Class Implements (Interface বেশি জনপ্রিয়)
interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

✔ Interface vs Type — Quick Summary
বিষয়	Interface	Type
Extend	extends	&
Declaration merging	✔ হ্যাঁ	❌ না
Flexibility	Object-focused	Highly flexible
Mapped types	সীমিত	✔ শক্তিশালী
Class implements	বেশি ব্যবহৃত	সম্ভব
🟦 2️⃣ any, unknown, never — পার্থক্য (Deep Explanation)

TypeScript-এ এই তিনটি টাইপ তিনটি সম্পূর্ণ ভিন্ন উদ্দেশ্যে ব্যবহৃত হয়।

🔹 1. any — সবচেয়ে flexible, সবচেয়ে বিপজ্জনক
let value: any = "Hello";
value = 10;
value.test(); // ❌ No compile error → runtime crash possible


সব ধরনের type checking বন্ধ

autocomplete কমে যায়

ভুল ধরতে কষ্ট হয়

❗ যেখানে প্রয়োজন নেই, সেখানে any এড়িয়ে চলা উচিত।

🔹 2. unknown — safer alternative to any

যেকোনো value রাখা যায়, কিন্তু ব্যবহার করার আগে type-check করতে হয়।

let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}


✔ Safety
✔ Forced type checking
✔ API response handle করার জন্য perfect

🔹 3. never — এমন টাইপ যার কোন value কখনোই থাকে না
উদাহরণ: function that always throws
function throwError(message: string): never {
  throw new Error(message);
}

Exhaustive checking:
type Status = "success" | "failed";

function checkStatus(status: Status) {
  switch (status) {
    case "success":
      return "OK";
    case "failed":
      return "Not OK";
    default:
      const _exhaustive: never = status; 
  }
}


✔ অসম্ভব / unreachable state handle করতে ব্যবহৃত হয়।
✔ বড় প্রকল্পে অত্যন্ত গুরুত্বপূর্ণ।

✔ any vs unknown vs never — Quick Summary
টাইপ	ধারণা	নিরাপত্তা	কখন ব্যবহার
any	যেকোনো value	❌ Unsafe	Legacy code, quick migration
unknown	যেকোনো value (safe)	✔ Safe	API data, dynamic input
never	কোনো value নয়	✔ Strict	Error throw, exhaustive check
🎯 Conclusion

Interface = object-focused, extensible, clean

Type = flexible, advanced, powerful

any = unsafe

unknown = safer dynamic type

never = unreachable code guarantee

TypeScript-কে শক্তিশালীভাবে ব্যবহার করতে হলে এই পার্থক্যগুলো পরিষ্কারভাবে জানা জরুরি।