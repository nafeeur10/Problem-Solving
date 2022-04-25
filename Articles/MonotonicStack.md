## Monotonic Stack 🔭

Monotonic হলো এমন একটা লিস্ট অথবা ফাঙ্কশন যেটা সব সময় হয় Increasing অথবা Decreasing হবে। তাই মোনোটোনিক স্ট্যাক এর ও এই রকম বৈশিষ্ট হবে।  

### Stack = LIFO (Last in First out)

Monotonic Stack সাধারণ স্ট্যাক এর মতোই।  শুধু আমরা যখন কোনো এলিমেন্ট পুশ করবো তখন মোনোটোনিক বৈশিষ্ট (Increasing অথবা Decreasing) ঠিক থাকলেই হলো। যদি কন্ডিশন ব্রেক করে তাহলে আমরা টপ এলিমেন্ট কে রিমুভ করে দিবো যতক্ষণ আমার মোনোটোনিক এর কন্ডিশন স্যাটিসফাই না করে, তারপর নতুন আইটেম পুশ করবো। 

Let's take a look an example:

1st Step:

List
-------------------------
| 3 | 1 | 6 | 2 | 5 | 4 |
-------------------------

Stack:
------------------------
|  |   |   |   |   |   |
------------------------

আমরা একটা মোনোটোনিক স্ট্যাক বানাবো যেখানে সব আইটেম Decreasing থাকবে। 
<!--
**nafeeur10/nafeeur10** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
