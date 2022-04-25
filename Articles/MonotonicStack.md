## Monotonic Stack 🔭

Monotonic হলো এমন একটা লিস্ট অথবা ফাঙ্কশন যেটা সব সময় হয় Increasing অথবা Decreasing হবে। তাই মোনোটোনিক স্ট্যাক এর ও এই রকম বৈশিষ্ট হবে।  

### Stack = LIFO (Last in First out)

Monotonic Stack সাধারণ স্ট্যাক এর মতোই।  শুধু আমরা যখন কোনো এলিমেন্ট পুশ করবো তখন মোনোটোনিক বৈশিষ্ট (Increasing অথবা Decreasing) ঠিক থাকলেই হলো। যদি কন্ডিশন ব্রেক করে তাহলে আমরা টপ এলিমেন্ট কে রিমুভ করে দিবো যতক্ষণ আমার মোনোটোনিক এর কন্ডিশন স্যাটিসফাই না করে, তারপর নতুন আইটেম পুশ করবো। 

Let's take a look an example:

```
List
-------------------------
| 3 | 1 | 6 | 2 | 5 | 4 |
-------------------------

Stack:
------------------------
|  |   |   |   |   |   |
------------------------
```

আমরা একটা মোনোটোনিক স্ট্যাক বানাবো যেখানে সব আইটেম Decreasing থাকবে। 

1st Step:
Take 3 and push into Stack

```
List
-------------------------
| 3 | 1 | 6 | 2 | 5 | 4 |
-------------------------

Stack:
-------------------------
| 3 |   |   |   |   |   |
-------------------------
```

2nd Step:
Take 1 and push int Stack

```
List
-------------------------
| 3 | 1 | 6 | 2 | 5 | 4 |
-------------------------

Stack:
-------------------------
| 3 | 1 |   |   |   |   |
-------------------------
```

3rd Step:
Take 6 but top element 1 is less than 6. So, pop 1. 
Then top element is 3 and this is also less than 6. So, pop 3
Now push 6

```
List
-------------------------
| 3 | 1 | 6 | 2 | 5 | 4 |
-------------------------

Stack:
-------------------------
| 6 |  |   |   |   |   |
-------------------------
```

4th Step:
Take 2. Top element 6 is greater than 2. So, push 2.

```
List
-------------------------
| 3 | 1 | 6 | 2 | 5 | 4 |
-------------------------

Stack:
-------------------------
| 6 | 2 |   |   |   |   |
-------------------------
```

5th Step:
Take 5. Top element 2 is less than 5. So, pop 2.
Now push 5

```
List
-------------------------
| 3 | 1 | 6 | 2 | 5 | 4 |
-------------------------

Stack:
-------------------------
| 6 | 5 |  |   |   |   |
-------------------------
```

6th Step:
Take 4. Top element 5 is greater than 4. So, push 4.

```
List
-------------------------
| 3 | 1 | 6 | 2 | 5 | 4 |
-------------------------

Stack:
-------------------------
| 6 | 5 | 4 |   |   |   |
-------------------------
```

This is our result:

```
-------------------------
| 6 | 5 | 4 |   |   |   |
-------------------------
```
An increasing Monotonic Stack.

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
