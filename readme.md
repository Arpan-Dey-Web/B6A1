✍️ Blog Post (Bangla)

নীচে দেওয়া ২টি টপিকের উপর বিস্তারিত ব্লগ লেখা হলো।

1️⃣ Interface এবং Type এর মধ্যে পার্থক্য — TypeScript এ

TypeScript-এ interface এবং type alias—দুটিই অবজেক্টের স্ট্রাকচার নির্ধারণের জন্য ব্যবহৃত হয়। তবে এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে, যা সঠিক পরিস্থিতিতে সঠিকভাবে ব্যবহার করা জরুরি।

✔️ 1. Extension / Inheritance

interface সহজ সিনট্যাক্সে extend করা যায়।

type intersection (&) ব্যবহার করে extend করতে হয়।

উদাহরণ:

interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}

type UserType = {
  name: string;
};

type AdminType = UserType & {
  role: string;
};

✔️ 2. Declaration Merging

interface multiple declaration merging সাপোর্ট করে।

type merging সাপোর্ট করে না।

উদাহরণ:

interface Person {
  name: string;
}

interface Person {
  age: number;
}


ফলাফল:

{ name: string; age: number }

✔️ 3. Usage Flexibility

type union, tuple, primitive type—সব ধরনের value shape করার জন্য ব্যবহার করা যায়।

interface object structure-এর জন্য উপযুক্ত।

type ID = string | number; // type দিয়ে সম্ভব

✔️ সংক্ষেপে

interface → object structure, declarative style, extend-friendly

type → flexible, union, intersection, advanced transformations

2️⃣ any, unknown এবং never – এদের মধ্যে পার্থক্য

TypeScript-এ এই তিনটি টাইপ তিনটি আলাদা উদ্দেশ্যে ব্যবহৃত হয়। এগুলো ভুলভাবে ব্যবহার করলে bug তৈরি হতে পারে। তাই পার্থক্য বোঝা খুব গুরুত্বপূর্ণ।

▶️ 1. any — সবচেয়ে flexible, কিন্তু সবচেয়ে ঝুঁকিপূর্ণ

টাইপ checking সম্পূর্ণ বন্ধ করে দেয়।

let value: any = "Hello";
value = 10;
value.test(); // No error (runtime এ crash হতে পারে)

▶️ 2. unknown — any-এর তুলনায় নিরাপদ

যেকোনো value রাখা যায় কিন্তু ব্যবহার করার আগে টাইপ চেক করতে হবে।

let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}

▶️ 3. never — এমন value যা কখনোই ঘটে না

যখন কোনো function কিছু return করে না, বা সবসময় error throw করে তখন never ব্যবহার হয়।

function throwError(msg: string): never {
  throw new Error(msg);
}

✔️ সংক্ষেপে তুলনা
টাইপ	কী বোঝায়	কেন ব্যবহার
any	যেকোনো value	Unsafe, সম্ভব হলে avoid
unknown	যেকোন value কিন্তু safe	টাইপ চেক বাধ্যতামূলক
never	কোনো return নেই	Error-only বা unreachable code