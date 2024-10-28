export const ALL_PROBLEMS = [
    // ===============================================DEBUGGING===========================================================
    // Question 1
    {
        id: "a1b2c3d4e5f6g7h8",
        category: "Debugging",
        language: "python",
        time_limit: 4,
        points: 20,
        difficulty: "Easy",
        base_price: 30,
        title: "Fix the Arithmetic Operator",
        description: "The code is supposed to add two numbers, but it’s subtracting instead.",
        buggedCode: `
            def add(a, b):
                return a - b
        `,
        solutionCode: `
            def add(a, b):
                return a + b
        `,
        testCases: [
            { input: "2 3", expectedOutput: "5" },
            { input: "10 20", expectedOutput: "30" },
            { input: "-5 -5", expectedOutput: "-10" }
        ]
    },
    // Question 2
    {
        id: "h8g7f6e5d4c3b2a1",
        category: "Debugging",
        language: "javascript",
        time_limit: 3,
        points: 15,
        difficulty: "Easy",
        base_price: 25,
        title: "Correct the Variable Name",
        description: "A variable is incorrectly named, causing a NameError.",
        buggedCode: `
            let x = 10;
            console.log(y);
        `,
        solutionCode: `
            let x = 10;
            console.log(x);
        `,
        testCases: [
            { input: "", expectedOutput: "10" },
            { input: "", expectedOutput: "10" }, 
            { input: "", expectedOutput: "10" }
        ]
    },
    // Question 3
    {
        id: "1a2b3c4d5e6f7g8h",
        category: "Debugging",
        language: "cpp",
        time_limit: 5,
        points: 25,
        difficulty: "Easy",
        base_price: 35,
        title: "Change the Loop Condition",
        description: "A while loop runs infinitely due to an incorrect condition.",
        buggedCode: `
            int i = 0;
            while (i < 5) {
                cout << i << endl;
            }
        `,
        solutionCode: `
            int i = 0;
            while (i < 5) {
                cout << i << endl;
                i++;
            }
        `,
        testCases: [
            { input: "", expectedOutput: "0\n1\n2\n3\n4\n" },
            { input: "", expectedOutput: "0\n1\n2\n3\n4\n" }, 
            { input: "", expectedOutput: "0\n1\n2\n3\n4\n" }
        ]
    },
    // Question 4
    {
        id: "8h7g6f5e4d3c2b1a",
        category: "Debugging",
        language: "python",
        time_limit: 4,
        points: 20,
        difficulty: "Easy",
        base_price: 30,
        title: "Debug Array Index Error",
        description: "Fix the array index to avoid an 'index out of range' error.",
        buggedCode: `
            arr = [1, 2, 3]
            print(arr[3])
        `,
        solutionCode: `
            arr = [1, 2, 3]
            print(arr[2])
        `,
        testCases: [
            { input: "", expectedOutput: "3" },
            { input: "", expectedOutput: "3" },
            { input: "", expectedOutput: "3" }
        ]
    },
    // Question 5
    {
        id: "2b1a3d4c5e6f7g8h",
        category: "Debugging",
        language: "python",
        time_limit: 5,
        points: 25,
        difficulty: "Easy",
        base_price: 35,
        title: "Adjust Function Return Type",
        description: "The function returns None instead of a value due to missing return statement.",
        buggedCode: `
            def greet(name):
                print("Hello, " + name)
        `,
        solutionCode: `
            def greet(name):
                return "Hello, " + name
        `,
        testCases: [
            { input: "Alice", expectedOutput: "Hello, Alice" },
            { input: "Bob", expectedOutput: "Hello, Bob" },
            { input: "World", expectedOutput: "Hello, World" }
        ]
    },
    // Question 6
    {
        id: "g8f7e6d5c4b3a2h1",
        category: "Debugging",
        language: "javascript",
        time_limit: 5,
        points: 30,
        difficulty: "Easy",
        base_price: 40,
        title: "Modify String Concatenation",
        description: "Fix the string concatenation error where integers are used directly in join.",
        buggedCode: `
            const nums = [1, 2, 3];
            console.log(nums.join(","));
        `,
        solutionCode: `
            const nums = [1, 2, 3];
            console.log(nums.map(String).join(","));
        `,
        testCases: [
            { input: "", expectedOutput: "1,2,3" },
            { input: "", expectedOutput: "1,2,3" },
            { input: "", expectedOutput: "1,2,3" }
        ]
    },
    // Question 7
    {
        id: "4c3d2e1f5g6h7b8a",
        category: "Debugging",
        language: "python",
        time_limit: 5,
        points: 20,
        difficulty: "Easy",
        base_price: 30,
        title: "Correct the Loop Range",
        description: "Loop is missing elements due to incorrect range.",
        buggedCode: `
            for i in range(1, 10):
                print(i)
        `,
        solutionCode: `
            for i in range(10):
                print(i)
        `,
        testCases: [
            { input: "", expectedOutput: "0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n" },
            { input: "", expectedOutput: "0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n" },
            { input: "", expectedOutput: "0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n" }
        ]
    },
    // Question 8
    {
        id: "7h6g5f4e3d2c1a8b",
        category: "Debugging",
        language: "python",
        time_limit: 4,
        points: 20,
        difficulty: "Easy",
        base_price: 30,
        title: "Rectify the Division Operation",
        description: "The division operation is causing unexpected results (int vs float).",
        buggedCode: `
            result = 5 / 2
        `,
        solutionCode: `
            result = 5 // 2
        `,
        testCases: [
            { input: "", expectedOutput: "2" },
            { input: "", expectedOutput: "2" },
            { input: "", expectedOutput: "2" }
        ]
    },
    // Question 9
    {
        id: "5d4c3b2a1e6f7h8g",
        category: "Debugging",
        language: "java",
        time_limit: 3,
        points: 15,
        difficulty: "Easy",
        base_price: 25,
        title: "Fix the Boolean Comparison",
        description: "The code uses = instead of == in a boolean comparison.",
        buggedCode: `
            int x = 5;
            if (x = 5) {
                System.out.println("Yes");
            }
        `,
        solutionCode: `
            int x = 5;
            if (x == 5) {
                System.out.println("Yes");
            }
        `,
        testCases: [
            { input: "", expectedOutput: "Yes" },
            { input: "", expectedOutput: "Yes" },
            { input: "", expectedOutput: "Yes" }
        ]
    },
    // Question 10
    {
        id: "3e2d1f5c6b7h8g4a",
        category: "Debugging",
        language: "javascript",
        time_limit: 5,
        points: 25,
        difficulty: "Easy",
        base_price: 35,
        title: "Correct the Function Call Order",
        description: "Incorrect function call order is causing undefined variables.",
        buggedCode: `
            function foo() {
                console.log(bar());
            }

            function bar() {
                return "Hello";
            }
        `,
        solutionCode: `
            function bar() {
                return "Hello";
            }

            function foo() {
                console.log(bar());
            }
        `,
        testCases: [
            { input: "", expectedOutput: "Hello" },
            { input: "", expectedOutput: "Hello" },
            { input: "", expectedOutput: "Hello" }
        ]
    },
    // Question 11
    {
        id: "d4f5g6h7a8b2c1e3",
        category: "Debugging",
        language: "python",
        time_limit: 6,
        points: 30,
        difficulty: "Easy",
        base_price: 40,
        title: "Remove Unnecessary Recursion",
        description: "Recursion is being used unnecessarily, causing performance issues.",
        buggedCode: `
            def count(n):
                if n == 0:
                    return
                return count(n - 1) + 1
        `,
        solutionCode: `
            def count(n):
                return n
        `,
        testCases: [
            { input: "5", expectedOutput: "5" },
            { input: "10", expectedOutput: "10" },
            { input: "1", expectedOutput: "1" }
        ]
    },
    // Question 12
    {
        id: "f6g7h8a9b1c2d3e4",
        category: "Debugging",
        language: "python",
        time_limit: 6,
        points: 30,
        difficulty: "Easy",
        base_price: 40,
        title: "Replace Mutable Default Argument",
        description: "A list as a default argument is causing unexpected behavior.",
        buggedCode: `
            def add_item(item, items=[]):
                items.append(item)
                return items
        `,
        solutionCode: `
            def add_item(item, items=None):
                if items is None:
                    items = []
                items.append(item)
                return items
        `,
        testCases: [
            { input: "1", expectedOutput: "[1]" },
            { input: "2", expectedOutput: "[2]" },
            { input: "3", expectedOutput: "[3]" }
        ]
    },
    // Question 13
    {
        id: "b8a7c9d6f5e3h1g4",
        category: "Debugging",
        language: "python",
        time_limit: 5,
        points: 25,
        difficulty: "Easy",
        base_price: 35,
        title: "Adjust the String Split Logic",
        description: "A split function isn’t working as expected on multiple delimiters.",
        buggedCode: `
            sentence = "Hello, world!"
            words = sentence.split(", ")
        `,
        solutionCode: `
            import re
            sentence = "Hello, world!"
            words = re.split(r',| ', sentence)
        `,
        testCases: [
            { input: "", expectedOutput: "['Hello', 'world!']" },
            { input: "", expectedOutput: "['Hello', 'world!']" },
            { input: "", expectedOutput: "['Hello', 'world!']" }
        ]
    },
    // Question 14
    {
        id: "c2b1d4e5f7h6g8a9",
        category: "Debugging",
        language: "python",
        time_limit: 6,
        points: 30,
        difficulty: "Easy",
        base_price: 40,
        title: "Fix Logic in Nested Loops",
        description: "Nested loops are leading to incorrect output due to misplaced conditionals.",
        buggedCode: `
            for i in range(5):
                for j in range(5):
                    if i == j:
                        continue
                print(i, j)
        `,
        solutionCode: `
            for i in range(5):
                for j in range(5):
                    if i == j:
                        continue
                    print(i, j)
        `,
        testCases: [
            { input: "", expectedOutput: "0 1\n0 2\n0 3\n0 4\n1 0\n1 2\n1 3\n1 4\n2 0\n2 1\n2 3\n2 4\n3 0\n3 1\n3 2\n3 4\n4 0\n4 1\n4 2\n4 3\n" },
            { input: "", expectedOutput: "0 1\n0 2\n0 3\n0 4\n1 0\n1 2\n1 3\n1 4\n2 0\n2 1\n2 3\n2 4\n3 0\n3 1\n3 2\n3 4\n4 0\n4 1\n4 2\n4 3\n" },
            { input: "", expectedOutput: "0 1\n0 2\n0 3\n0 4\n1 0\n1 2\n1 3\n1 4\n2 0\n2 1\n2 3\n2 4\n3 0\n3 1\n3 2\n3 4\n4 0\n4 1\n4 2\n4 3\n" }
        ]
    },
    // Question 15
    {
        id: "h3g2f1e4d7c6b8a9",
        category: "Debugging",
        language: "python",
        time_limit: 6,
        points: 35,
        difficulty: "Easy",
        base_price: 45,
        title: "Resolve Infinite Recursion",
        description: "Recursive function doesn’t have a base case, leading to infinite recursion.",
        buggedCode: `
            def recurse(n):
                return recurse(n - 1)
        `,
        solutionCode: `
            def recurse(n):
                if n <= 0:
                    return n
                return recurse(n - 1)
        `,
        testCases: [
            { input: "5", expectedOutput: "0" },
            { input: "10", expectedOutput: "0" },
            { input: "1", expectedOutput: "0" }
        ]
    },
    // Question 16
    {
        id: "g5f6e2h3c8a1b4d7",
        category: "Debugging",
        language: "python",
        time_limit: 4,
        points: 20,
        difficulty: "Easy",
        base_price: 30,
        title: "Correct the Case Sensitivity Issue",
        description: "Code comparison fails because it doesn’t account for case sensitivity.",
        buggedCode: `
            word = "Hello"
            if word == "hello":
                print("Match")
        `,
        solutionCode: `
            word = "Hello"
            if word.lower() == "hello":
                print("Match")
        `,
        testCases: [
            { input: "", expectedOutput: "Match" },
            { input: "", expectedOutput: "Match" },
            { input: "", expectedOutput: "Match" }
        ]
    },
    // Question 17
    {
        id: "e3d4c5a6b7h1g8f2",
        category: "Debugging",
        language: "python",
        time_limit: 5,
        points: 25,
        difficulty: "Easy",
        base_price: 35,
        title: "Fix Floating Point Precision Issue",
        description: "A calculation is off due to floating-point precision issues.",
        buggedCode: `
            result = 0.1 + 0.2
        `,
        solutionCode: `
            result = round(0.1 + 0.2, 1)
        `,
        testCases: [
            { input: "", expectedOutput: "0.3" },
            { input: "", expectedOutput: "0.3" },
            { input: "", expectedOutput: "0.3" }
        ]
    },
    // Question 18
    {
        id: "a7c1e3b4f5g6h2d8",
        category: "Debugging",
        language: "python",
        time_limit: 4,
        points: 20,
        difficulty: "Easy",
        base_price: 30,
        title: "Adjust Incorrect List Initialization",
        description: "A list is initialized incorrectly, causing unexpected results.",
        buggedCode: `
            lst = [0] * 5
            lst[0] = 10
        `,
        solutionCode: `
            lst = [0 for _ in range(5)]
            lst[0] = 10
        `,
        testCases: [
            { input: "", expectedOutput: "[10, 0, 0, 0, 0]" },
            { input: "", expectedOutput: "[10, 0, 0, 0, 0]" },
            { input: "", expectedOutput: "[10, 0, 0, 0, 0]" }
        ]
    },
    // Question 19
    {
        id: "f6g4e5d7h3b8a1c2",
        category: "Debugging",
        language: "python",
        time_limit: 4,
        points: 20,
        difficulty: "Easy",
        base_price: 30,
        title: "Modify the Dictionary Key Access",
        description: "A dictionary key is accessed incorrectly, causing a KeyError.",
        buggedCode: `
            data = {"name": "Alice"}
            print(data["age"])
        `,
        solutionCode: `
            data = {"name": "Alice"}
            print(data.get("age", "Key not found"))
        `,
        testCases: [
            { input: "", expectedOutput: "Key not found" },
            { input: "", expectedOutput: "Key not found" },
            { input: "", expectedOutput: "Key not found" }
        ]
    },
    // Question 20
    {
        id: "d4c2b1f5e6h7g8a3",
        category: "Debugging",
        language: "python",
        time_limit: 3,
        points: 15,
        difficulty: "Easy",
        base_price: 25,
        title: "Fix the Type Casting Issue",
        description: "Type casting is not handled properly, causing a TypeError.",
        buggedCode: `
            age = "25"
            total = 5 + age
        `,
        solutionCode: `
            age = "25"
            total = 5 + int(age)
        `,
        testCases: [
            { input: "", expectedOutput: "30" },
            { input: "", expectedOutput: "30" },
            { input: "", expectedOutput: "30" }
        ]
    },
    // Question 21
    {
        id: "f1a2b3c4d5e6g7h8",
        category: "Debugging",
        language: "python",
        time_limit: 6,
        points: 35,
        difficulty: "Medium",
        base_price: 50,
        title: "Correct the Binary Search Logic",
        description: "Binary search implementation has an off-by-one error, leading to incorrect results.",
        buggedCode: `
            def binary_search(arr, x):
                left, right = 0, len(arr)
                while left <= right:
                    mid = (left + right) // 2
                    if arr[mid] == x:
                        return mid
                    elif arr[mid] < x:
                        left = mid + 1
                    else:
                        right = mid - 1
                return -1
        `,
        solutionCode: `
            def binary_search(arr, x):
                left, right = 0, len(arr) - 1
                while left <= right:
                    mid = (left + right) // 2
                    if arr[mid] == x:
                        return mid
                    elif arr[mid] < x:
                        left = mid + 1
                    else:
                        right = mid - 1
                return -1
        `,
        testCases: [
            { input: "[1, 2, 3, 4, 5], 3", expectedOutput: "2" },
            { input: "[1, 2, 3, 4, 5], 5", expectedOutput: "4" },
            { input: "[1, 2, 3, 4, 5], 6", expectedOutput: "-1" }
        ]
    },
    // Question 22
    {
        id: "h8g7f6e5d4b3c2a1",
        category: "Debugging",
        language: "python",
        time_limit: 7,
        points: 40,
        difficulty: "Medium",
        base_price: 55,
        title: "Debug Object-Oriented Method",
        description: "The class method doesn’t update object attributes as expected.",
        buggedCode: `
            class Counter:
                def __init__(self):
                    self.count = 0

                def increment(self):
                    count += 1
        `,
        solutionCode: `
            class Counter:
                def __init__(self):
                    self.count = 0

                def increment(self):
                    self.count += 1
        `,
        testCases: [
            { input: "Counter().increment(); Counter().count", expectedOutput: "1" },
            { input: "Counter().increment(); Counter().increment(); Counter().count", expectedOutput: "2" },
            { input: "Counter().count", expectedOutput: "0" }
        ]
    },
    // Question 23
    {
        id: "3b9f4e8a6d1278bc",
        category: "Debugging",
        language: "python",
        time_limit: 8,
        points: 45,
        difficulty: "Medium",
        base_price: 60,
        title: "Fix the Sorting Algorithm Error",
        description: "Sorting function fails on certain edge cases (like negatives or duplicates).",
        buggedCode: `
            def bubble_sort(arr):
                for i in range(len(arr)):
                    for j in range(len(arr) - i - 1):
                        if arr[j] > arr[j + 1]:
                            arr[j], arr[j + 1] = arr[j + 1], arr[j]
        `,
        solutionCode: `
            def bubble_sort(arr):
                for i in range(len(arr)):
                    for j in range(len(arr) - i - 1):
                        if arr[j] > arr[j + 1]:
                            arr[j], arr[j + 1] = arr[j + 1], arr[j]
                return arr
        `,
        testCases: [
            { input: "[3, 1, 2]", expectedOutput: "[1, 2, 3]" },
            { input: "[5, 3, 8, 6, 2]", expectedOutput: "[2, 3, 5, 6, 8]" },
            { input: "[1, -1, 0]", expectedOutput: "[-1, 0, 1]" }
        ]
    },
    // Question 24
    {
        id: "8f1c7d4b3e5926ab",
        category: "Debugging",
        language: "python",
        time_limit: 7,
        points: 35,
        difficulty: "Medium",
        base_price: 50,
        title: "Resolve List of Lists Issue",
        description: "Accessing elements in a list of lists is causing index errors.",
        buggedCode: `
            matrix = [[0] * 3] * 3
            matrix[0][0] = 1
        `,
        solutionCode: `
            matrix = [[0 for _ in range(3)] for _ in range(3)]
            matrix[0][0] = 1
        `,
        testCases: [
            { input: "", expectedOutput: "[[1, 0, 0], [0, 0, 0], [0, 0, 0]]" },
            { input: "", expectedOutput: "[[1, 0, 0], [0, 0, 0], [0, 0, 0]]" },
            { input: "", expectedOutput: "[[1, 0, 0], [0, 0, 0], [0, 0, 0]]" }
        ]
    },
    // Question 25
    {
        id: "2a5e9d8c4f1273bd",
        category: "Debugging",
        language: "python",
        time_limit: 7,
        points: 40,
        difficulty: "Medium",
        base_price: 55,
        title: "Adjust the File Reading Logic",
        description: "The file read function doesn’t handle empty lines correctly.",
        buggedCode: `
            with open("file.txt", "r") as f:
                for line in f:
                    print(line)
        `,
        solutionCode: `
            with open("file.txt", "r") as f:
                for line in f:
                    if line.strip():
                        print(line.strip())
        `,
        testCases: [
            { input: "", expectedOutput: "Line1\nLine2\nLine3" },
            { input: "", expectedOutput: "Line1\nLine2\nLine3" },
            { input: "", expectedOutput: "Line1\nLine2\nLine3" }
        ]
    },
    // Question 26
    {
        id: "4a7c6f8b9d1234ab",
        category: "Debugging",
        language: "python",
        time_limit: 8,
        points: 45,
        difficulty: "Medium",
        base_price: 60,
        title: "Fix the Prime Check Logic",
        description: "Prime checking function is failing due to incorrect loop bounds.",
        buggedCode: `
            def is_prime(n):
                for i in range(2, n):
                    if n % i == 0:
                        return False
                return True
        `,
        solutionCode: `
            def is_prime(n):
                if n <= 1:
                    return False
                for i in range(2, int(n**0.5) + 1):
                    if n % i == 0:
                        return False
                return True
        `,
        testCases: [
            { input: "5", expectedOutput: "True" },
            { input: "10", expectedOutput: "False" },
            { input: "1", expectedOutput: "False" }
        ]
    },
    // Question 27
    {
        id: "f6g7a2d5c4h3e8b1",
        category: "Debugging",
        language: "python",
        time_limit: 7,
        points: 35,
        difficulty: "Medium",
        base_price: 50,
        title: "Correct the JSON Parsing",
        description: "JSON parsing fails when nested structures are used.",
        buggedCode: `
            import json
            data = json.loads('{"name": "Alice", "age": 25}')
            print(data["gender"])
        `,
        solutionCode: `
            import json
            data = json.loads('{"name": "Alice", "age": 25}')
            print(data.get("gender", "Key not found"))
        `,
        testCases: [
            { input: "", expectedOutput: "Key not found" },
            { input: "", expectedOutput: "Key not found" },
            { input: "", expectedOutput: "Key not found" }
        ]
    },
    // Question 28
    {
        id: "1a2b3d5f4c6g7h8",
        category: "Debugging",
        language: "python",
        time_limit: 8,
        points: 40,
        difficulty: "Medium",
        base_price: 55,
        title: "Debug Regular Expression Pattern",
        description: "A regex pattern isn’t matching as expected, missing cases.",
        buggedCode: `
            import re
            pattern = r"\\b\\w+\\b"
            matches = re.findall(pattern, "hello_world")
        `,
        solutionCode: `
            import re
            pattern = r"[a-zA-Z0-9_]+"
            matches = re.findall(pattern, "hello_world")
        `,
        testCases: [
            { input: "", expectedOutput: "['hello_world']" },
            { input: "", expectedOutput: "['hello_world']" },
            { input: "", expectedOutput: "['hello_world']" }
        ]
    },
    // Question 29
    {
        id: "e3f2g1a5h8c7b6d4",
        category: "Debugging",
        language: "python",
        time_limit: 9,
        points: 50,
        difficulty: "Medium",
        base_price: 60,
        title: "Resolve Memory Leak Issue",
        description: "Code causes memory leak due to circular references or improper cleanup.",
        buggedCode: `
            class Node:
                def __init__(self, value):
                    self.value = value
                    self.next = None

                def set_next(self, node):
                    self.next = node
        `,
        solutionCode: `
            import weakref

            class Node:
                def __init__(self, value):
                    self.value = value
                    self.next = None

                def set_next(self, node):
                    self.next = weakref.ref(node)
        `,
        testCases: [
            { input: "", expectedOutput: "No memory leaks detected" },
            { input: "", expectedOutput: "No memory leaks detected" },
            { input: "", expectedOutput: "No memory leaks detected" }
        ]
    },
    // Question 30
    {
        id: "d3e4f5g2a1h6b7c8",
        category: "Debugging",
        language: "python",
        time_limit: 8,
        points: 45,
        difficulty: "Medium",
        base_price: 55,
        title: "Fix the Merge Sort Implementation",
        description: "Merge sort function fails due to incorrect handling of split arrays.",
        buggedCode: `
            def merge_sort(arr):
                if len(arr) > 1:
                    mid = len(arr) // 2
                    left = arr[:mid]
                    right = arr[mid:]
                    merge_sort(left)
                    merge_sort(right)
        `,
        solutionCode: `
            def merge_sort(arr):
                if len(arr) > 1:
                    mid = len(arr) // 2
                    left = arr[:mid]
                    right = arr[mid:]
                    merge_sort(left)
                    merge_sort(right)

                    i = j = k = 0
                    while i < len(left) and j < len(right):
                        if left[i] < right[j]:
                            arr[k] = left[i]
                            i += 1
                        else:
                            arr[k] = right[j]
                            j += 1
                        k += 1

                    while i < len(left):
                        arr[k] = left[i]
                        i += 1
                        k += 1

                    while j < len(right):
                        arr[k] = right[j]
                        j += 1
                        k += 1
        `,
        testCases: [
            { input: "[3, 1, 2]", expectedOutput: "[1, 2, 3]" },
            { input: "[5, 3, 8, 6, 2]", expectedOutput: "[2, 3, 5, 6, 8]" },
            { input: "[1, -1, 0]", expectedOutput: "[-1, 0, 1]" }
        ]
    },
    // Question 31
    {
        id: "a1b2c3d4e5f6g7h9",
        category: "Debugging",
        language: "python",
        time_limit: 12,
        points: 70,
        difficulty: "Hard",
        base_price: 100,
        title: "Fix the Graph Traversal Logic",
        description: "Graph traversal function (DFS/BFS) fails on cyclic graphs due to infinite loop.",
        buggedCode: `
            def dfs(graph, node, visited):
                visited.add(node)
                for neighbor in graph[node]:
                    dfs(graph, neighbor, visited)
        `,
        solutionCode: `
            def dfs(graph, node, visited):
                visited.add(node)
                for neighbor in graph[node]:
                    if neighbor not in visited:
                        dfs(graph, neighbor, visited)
        `,
        testCases: [
            { input: "{'A': ['B'], 'B': ['A']}, 'A'", expectedOutput: "A B" },
            { input: "{'A': ['B', 'C'], 'B': ['D'], 'C': [], 'D': []}, 'A'", expectedOutput: "A B D C" },
            { input: "{'A': [], 'B': []}, 'A'", expectedOutput: "A" }
        ]
    },
    // Question 32
    {
        id: "h8g7f6e5d4c3b2a1",
        category: "Debugging",
        language: "python",
        time_limit: 15,
        points: 80,
        difficulty: "Hard",
        base_price: 110,
        title: "Resolve Dynamic Programming Overhead",
        description: "Dynamic programming solution doesn’t use memoization, leading to performance issues.",
        buggedCode: `
            def fib(n):
                if n <= 1:
                    return n
                return fib(n - 1) + fib(n - 2)
        `,
        solutionCode: `
            def fib(n, memo={}):
                if n in memo:
                    return memo[n]
                if n <= 1:
                    return n
                memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
                return memo[n]
        `,
        testCases: [
            { input: "10", expectedOutput: "55" },
            { input: "20", expectedOutput: "6765" },
            { input: "30", expectedOutput: "832040" }
        ]
    },
    // Question 33
    {
        id: "3e4d5f6g7h8a2b1c",
        category: "Debugging",
        language: "python",
        time_limit: 13,
        points: 75,
        difficulty: "Hard",
        base_price: 105,
        title: "Debug the Encryption Algorithm",
        description: "Encryption function isn’t producing reversible outputs due to logic errors.",
        buggedCode: `
            def encrypt(text, shift):
                encrypted = ""
                for char in text:
                    encrypted += chr(ord(char) + shift)
                return encrypted
        `,
        solutionCode: `
            def encrypt(text, shift):
                encrypted = ""
                for char in text:
                    if char.isalpha():
                        offset = 65 if char.isupper() else 97
                        encrypted += chr((ord(char) - offset + shift) % 26 + offset)
                    else:
                        encrypted += char
                return encrypted
        `,
        testCases: [
            { input: "'HELLO', 3", expectedOutput: "KHOOR" },
            { input: "'hello', 1", expectedOutput: "ifmmp" },
            { input: "'abcxyz', 3", expectedOutput: "defabc" }
        ]
    },
    // Question 34
    {
        id: "5d6e7f8g4c3b2a1",
        category: "Debugging",
        language: "python",
        time_limit: 15,
        points: 85,
        difficulty: "Hard",
        base_price: 115,
        title: "Fix Thread Synchronization Issue",
        description: "Code uses multiple threads but fails due to improper synchronization mechanisms.",
        buggedCode: `
            import threading

            balance = 0

            def deposit(amount):
                global balance
                balance += amount
        `,
        solutionCode: `
            import threading

            balance = 0
            balance_lock = threading.Lock()

            def deposit(amount):
                global balance
                with balance_lock:
                    balance += amount
        `,
        testCases: [
            { input: "", expectedOutput: "Consistent balance updates with no race conditions" },
            { input: "", expectedOutput: "Consistent balance updates with no race conditions" },
            { input: "", expectedOutput: "Consistent balance updates with no race conditions" }
        ]
    },
    // Question 35
    {
        id: "7a8b1c2d3e4f5g6",
        category: "Debugging",
        language: "python",
        time_limit: 13,
        points: 75,
        difficulty: "Hard",
        base_price: 105,
        title: "Correct the Database Query Logic",
        description: "A function querying a database returns incorrect results due to flawed SQL syntax or logic.",
        buggedCode: `
            query = "SELECT * FROM employees WHERE name = 'Alice'"
        `,
        solutionCode: `
            name = 'Alice'
            query = "SELECT * FROM employees WHERE name = %s", (name,)
        `,
        testCases: [
            { input: "", expectedOutput: "Prevents SQL injection and retrieves correct results" },
            { input: "", expectedOutput: "Prevents SQL injection and retrieves correct results" },
            { input: "", expectedOutput: "Prevents SQL injection and retrieves correct results" }
        ]
    },
    // Question 36
    {
        id: "1e2f3g4a5b6c7d8",
        category: "Debugging",
        language: "python",
        time_limit: 14,
        points: 80,
        difficulty: "Hard",
        base_price: 110,
        title: "Debug Network Socket Code",
        description: "Network socket code fails to handle connection errors gracefully, leading to crashes.",
        buggedCode: `
            import socket

            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.connect(("localhost", 8080))
            s.send(b"Hello")
        `,
        solutionCode: `
            import socket

            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            try:
                s.connect(("localhost", 8080))
                s.send(b"Hello")
            except socket.error as e:
                print(f"Socket error: {e}")
            finally:
                s.close()
        `,
        testCases: [
            { input: "", expectedOutput: "Socket error handled gracefully" },
            { input: "", expectedOutput: "Socket error handled gracefully" },
            { input: "", expectedOutput: "Socket error handled gracefully" }
        ]
    },
    // Question 37
    {
        id: "9b8a7d6c5e4f3g2h",
        category: "Debugging",
        language: "python",
        time_limit: 16,
        points: 90,
        difficulty: "Hard",
        base_price: 120,
        title: "Resolve the Memory Overflow Issue",
        description: "Code results in memory overflow on large inputs due to inefficient memory management.",
        buggedCode: `
            def process_large_data(data):
                large_array = [0] * 100000000
                for i in range(len(data)):
                    large_array[i] = data[i]
        `,
        solutionCode: `
            def process_large_data(data):
                for value in data:
                    process_value(value)  # process each item without storing large arrays
        `,
        testCases: [
            { input: "[1, 2, 3]", expectedOutput: "No memory overflow" },
            { input: "[10] * 100000", expectedOutput: "No memory overflow" },
            { input: "[0] * 500000", expectedOutput: "No memory overflow" }
        ]
    },
    // Question 38
    {
        id: "c2d3e4f5a6b7g8h9",
        category: "Debugging",
        language: "python",
        time_limit: 13,
        points: 75,
        difficulty: "Hard",
        base_price: 105,
        title: "Fix the Recursive Sum Logic",
        description: "Recursive sum function doesn’t return correct results due to improper base cases.",
        buggedCode: `
            def recursive_sum(n):
                if n == 1:
                    return n
                return n + recursive_sum(n - 1)
        `,
        solutionCode: `
            def recursive_sum(n):
                if n <= 0:
                    return 0
                return n + recursive_sum(n - 1)
        `,
        testCases: [
            { input: "5", expectedOutput: "15" },
            { input: "10", expectedOutput: "55" },
            { input: "0", expectedOutput: "0" }
        ]
    },
    // Question 39
    {
        id: "a3b4c5d6e7f8g1h9",
        category: "Debugging",
        language: "python",
        time_limit: 14,
        points: 80,
        difficulty: "Hard",
        base_price: 110,
        title: "Correct the Custom Exception Handling",
        description: "Custom exception handling code isn’t functioning as expected, leading to unhandled exceptions.",
        buggedCode: `
            class CustomError(Exception):
                pass

            def raise_custom_error():
                raise CustomError("An error occurred")
        `,
        solutionCode: `
            class CustomError(Exception):
                pass

            def raise_custom_error():
                try:
                    raise CustomError("An error occurred")
                except CustomError as e:
                    print(e)
        `,
        testCases: [
            { input: "", expectedOutput: "An error occurred" },
            { input: "", expectedOutput: "An error occurred" },
            { input: "", expectedOutput: "An error occurred" }
        ]
    },
    // Question 40
    {
        id: "8g7f6e5d4c3b2a1",
        category: "Debugging",
        language: "python",
        time_limit: 12,
        points: 70,
        difficulty: "Hard",
        base_price: 100,
        title: "Fix File Writing Logic",
        description: "File writing function fails when file permissions are restricted or file exists in read-only mode.",
        buggedCode: `
            with open("file.txt", "w") as f:
                f.write("Hello, World!")
        `,
        solutionCode: `
            try:
                with open("file.txt", "w") as f:
                    f.write("Hello, World!")
            except IOError as e:
                print(f"File error: {e}")
        `,
        testCases: [
            { input: "", expectedOutput: "File error handled gracefully if file is read-only" },
            { input: "", expectedOutput: "File error handled gracefully if file is read-only" },
            { input: "", expectedOutput: "File error handled gracefully if file is read-only" }
        ]
    },
    // =========================================DSA & Problem Solving================================================
    // Problem 1
    {
        id: "a1b2c3d4e5f6g7h8",
        category: "DSA & Problem Solving",
        title: "Find the Largest Number",
        description: "Given a list of numbers, find the largest number in the list.",
        time_limit: 5,
        points: 10,
        difficulty: "Easy",
        base_price: 15,
        exampleInput: "[3, 5, 2, 8, 1]",
        exampleOutput: "8",
        testCases: [
            { input: "[3, 5, 2, 8, 1]", expectedOutput: "8" },
            { input: "[7, 3, 9, 2]", expectedOutput: "9" },
            { input: "[1, 1, 1, 1]", expectedOutput: "1" }
        ],
        existingCode: {
            python: `def find_largest(arr):\n    return max(arr)  # Code from here`,
            cpp: `#include <vector>\n#include <algorithm>\nint findLargest(std::vector<int> arr) {\n    return *std::max_element(arr.begin(), arr.end());  // Code from here\n}`,
            java: `import java.util.Collections;\nimport java.util.List;\npublic int findLargest(List<Integer> arr) {\n    return Collections.max(arr);  // Code from here\n}`,
            javascript: `function findLargest(arr) {\n    return Math.max(...arr);  // Code from here\n}`,
            c: `#include <stdio.h>\nint findLargest(int arr[], int n) {\n    int max = arr[0];\n    for (int i = 1; i < n; i++)\n        if (arr[i] > max)\n            max = arr[i];\n    return max;  // Code from here\n}`
        }
    },
    // Problem 2
    {
        id: "g7h8a1b2c3d4e5f6",
        category: "DSA & Problem Solving",
        title: "Count Vowels in String",
        description: "Write a function to count the number of vowels in a given string.",
        time_limit: 5,
        points: 15,
        difficulty: "Easy",
        base_price: 20,
        exampleInput: '"Hello World"',
        exampleOutput: "3",
        testCases: [
            { input: '"Hello World"', expectedOutput: "3" },
            { input: '"OpenAI"', expectedOutput: "3" },
            { input: '"Programming"', expectedOutput: "3" }
        ],
        existingCode: {
            python: `def count_vowels(s):\n    return sum(1 for char in s if char.lower() in 'aeiou')  # Code from here`,
            cpp: `#include <string>\nint countVowels(std::string s) {\n    int count = 0;\n    for (char c : s) if (strchr("aeiouAEIOU", c)) count++;\n    return count;  // Code from here\n}`,
            java: `public int countVowels(String s) {\n    int count = 0;\n    for (char c : s.toCharArray()) if ("aeiouAEIOU".indexOf(c) != -1) count++;\n    return count;  // Code from here\n}`,
            javascript: `function countVowels(s) {\n    return s.split('').filter(c => 'aeiouAEIOU'.includes(c)).length;  // Code from here\n}`,
            c: `#include <string.h>\nint countVowels(char s[]) {\n    int count = 0;\n    for (int i = 0; s[i] != '\\0'; i++) if (strchr("aeiouAEIOU", s[i])) count++;\n    return count;  // Code from here\n}`
        }
    },
    // Problem 3
    {
        id: "d5e6f7g8a1b2c3h4",
        category: "DSA & Problem Solving",
        title: "Sum of Array Elements",
        description: "Given an array of integers, calculate the sum of all the elements.",
        time_limit: 5,
        points: 10,
        difficulty: "Easy",
        base_price: 15,
        exampleInput: "[1, 2, 3, 4]",
        exampleOutput: "10",
        testCases: [
            { input: "[1, 2, 3, 4]", expectedOutput: "10" },
            { input: "[0, 0, 0]", expectedOutput: "0" },
            { input: "[5, 10, 15]", expectedOutput: "30" }
        ],
        existingCode: {
            python: `def sum_elements(arr):\n    return sum(arr)  // Code from here`,
            cpp: `#include <vector>\nint sumElements(std::vector<int> arr) {\n    int sum = 0;\n    for (int n : arr) sum += n;\n    return sum;  // Code from here\n}`,
            java: `public int sumElements(int[] arr) {\n    int sum = 0;\n    for (int n : arr) sum += n;\n    return sum;  // Code from here\n}`,
            javascript: `function sumElements(arr) {\n    return arr.reduce((a, b) => a + b, 0);  // Code from here\n}`,
            c: `int sumElements(int arr[], int n) {\n    int sum = 0;\n    for (int i = 0; i < n; i++) sum += arr[i];\n    return sum;  // Code from here\n}`
        }
    },
    // Problem 4
    {
        id: "f5g6h7a8b1c2d3e4",
        category: "DSA & Problem Solving",
        title: "Reverse a String",
        description: "Write a function to reverse a given string.",
        time_limit: 4,
        points: 10,
        difficulty: "Easy",
        base_price: 15,
        exampleInput: '"Auction"',
        exampleOutput: '"noitcuA"',
        testCases: [
            { input: '"Auction"', expectedOutput: '"noitcuA"' },
            { input: '"Hello"', expectedOutput: '"olleH"' },
            { input: '"12345"', expectedOutput: '"54321"' }
        ],
        existingCode: {
            python: `def reverse_string(s):\n    return s[::-1]  // Code from here`,
            cpp: `#include <string>\nstd::string reverseString(std::string s) {\n    return std::string(s.rbegin(), s.rend());  // Code from here\n}`,
            java: `public String reverseString(String s) {\n    return new StringBuilder(s).reverse().toString();  // Code from here\n}`,
            javascript: `function reverseString(s) {\n    return s.split('').reverse().join('');  // Code from here\n}`,
            c: `void reverseString(char* s) {\n    int len = strlen(s);\n    for (int i = 0; i < len / 2; i++) {\n        char temp = s[i];\n        s[i] = s[len - i - 1];\n        s[len - i - 1] = temp;\n    }  // Code from here\n}`
        }
    },
    // Problem 5
    {
        id: "a7b8c1d2e3f4g5h6",
        category: "DSA & Problem Solving",
        title: "Check Even or Odd",
        description: "Write a program to check if a given number is even or odd.",
        time_limit: 4,
        points: 10,
        difficulty: "Easy",
        base_price: 15,
        exampleInput: "7",
        exampleOutput: '"Odd"',
        testCases: [
            { input: "7", expectedOutput: "Odd" },
            { input: "4", expectedOutput: "Even" },
            { input: "0", expectedOutput: "Even" }
        ],
        existingCode: {
            python: `def check_even_odd(n):\n    return "Even" if n % 2 == 0 else "Odd"  // Code from here`,
            cpp: `#include <string>\nstd::string checkEvenOdd(int n) {\n    return (n % 2 == 0) ? "Even" : "Odd";  // Code from here\n}`,
            java: `public String checkEvenOdd(int n) {\n    return (n % 2 == 0) ? "Even" : "Odd";  // Code from here\n}`,
            javascript: `function checkEvenOdd(n) {\n    return n % 2 === 0 ? "Even" : "Odd";  // Code from here\n}`,
            c: `const char* checkEvenOdd(int n) {\n    return (n % 2 == 0) ? "Even" : "Odd";  // Code from here\n}`
        }
    },
    // Problem 6
    {
        id: "c3d4e5f6a7b8g1h2",
        category: "DSA & Problem Solving",
        title: "Nth Fibonacci Number",
        description: "Find the Nth number in the Fibonacci sequence.",
        time_limit: 8,
        points: 15,
        difficulty: "Easy",
        base_price: 25,
        exampleInput: "5",
        exampleOutput: "3",
        testCases: [
            { input: "5", expectedOutput: "3" },
            { input: "6", expectedOutput: "5" },
            { input: "1", expectedOutput: "1" }
        ],
        existingCode: {
            python: `def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a  // Code from here`,
            cpp: `int fibonacci(int n) {\n    int a = 0, b = 1;\n    for (int i = 0; i < n; i++) {\n        int temp = a;\n        a = b;\n        b += temp;\n    }\n    return a;  // Code from here\n}`,
            java: `public int fibonacci(int n) {\n    int a = 0, b = 1;\n    for (int i = 0; i < n; i++) {\n        int temp = a;\n        a = b;\n        b += temp;\n    }\n    return a;  // Code from here\n}`,
            javascript: `function fibonacci(n) {\n    let a = 0, b = 1;\n    for (let i = 0; i < n; i++) {\n        [a, b] = [b, a + b];\n    }\n    return a;  // Code from here\n}`,
            c: `int fibonacci(int n) {\n    int a = 0, b = 1;\n    for (int i = 0; i < n; i++) {\n        int temp = a;\n        a = b;\n        b += temp;\n    }\n    return a;  // Code from here\n}`
        }
    },
    // Problem 7
    {
        id: "g1h2a3b4c5d6e7f8",
        category: "DSA & Problem Solving",
        title: "Find the Smallest Number",
        description: "Given a list of numbers, find the smallest number in the list.",
        time_limit: 4,
        points: 10,
        difficulty: "Easy",
        base_price: 15,
        exampleInput: "[12, 5, 9, 1]",
        exampleOutput: "1",
        testCases: [
            { input: "[12, 5, 9, 1]", expectedOutput: "1" },
            { input: "[0, -1, 3]", expectedOutput: "-1" },
            { input: "[10, 20, 5]", expectedOutput: "5" }
        ],
        existingCode: {
            python: `def find_smallest(arr):\n    return min(arr)  // Code from here`,
            cpp: `#include <vector>\n#include <algorithm>\nint findSmallest(std::vector<int> arr) {\n    return *std::min_element(arr.begin(), arr.end());  // Code from here\n}`,
            java: `import java.util.Collections;\nimport java.util.List;\npublic int findSmallest(List<Integer> arr) {\n    return Collections.min(arr);  // Code from here\n}`,
            javascript: `function findSmallest(arr) {\n    return Math.min(...arr);  // Code from here\n}`,
            c: `int findSmallest(int arr[], int n) {\n    int min = arr[0];\n    for (int i = 1; i < n; i++)\n        if (arr[i] < min)\n            min = arr[i];\n    return min;  // Code from here\n}`
        }
    },
    // Problem 8
    {
        id: "f1g2h3a4b5c6d7e8",
        category: "DSA & Problem Solving",
        title: "Check Palindrome",
        description: "Determine if a given word is a palindrome (reads the same backward as forward).",
        time_limit: 5,
        points: 15,
        difficulty: "Easy",
        base_price: 20,
        exampleInput: '"racecar"',
        exampleOutput: "True",
        testCases: [
            { input: '"racecar"', expectedOutput: "True" },
            { input: '"hello"', expectedOutput: "False" },
            { input: '"madam"', expectedOutput: "True" }
        ],
        existingCode: {
            python: `def is_palindrome(word):\n    return word == word[::-1]  // Code from here`,
            cpp: `#include <string>\nbool isPalindrome(std::string word) {\n    return word == std::string(word.rbegin(), word.rend());  // Code from here\n}`,
            java: `public boolean isPalindrome(String word) {\n    return new StringBuilder(word).reverse().toString().equals(word);  // Code from here\n}`,
            javascript: `function isPalindrome(word) {\n    return word === word.split('').reverse().join('');  // Code from here\n}`,
            c: `#include <string.h>\nbool isPalindrome(char word[]) {\n    int len = strlen(word);\n    for (int i = 0; i < len / 2; i++)\n        if (word[i] != word[len - i - 1])\n            return false;\n    return true;  // Code from here\n}`
        }
    },
    // Problem 9
    {
        id: "e7f8g1a2b3c4d5h6",
        category: "DSA & Problem Solving",
        title: "Count Digits in Integer",
        description: "Write a function to count the number of digits in a given integer.",
        time_limit: 4,
        points: 10,
        difficulty: "Easy",
        base_price: 15,
        exampleInput: "12345",
        exampleOutput: "5",
        testCases: [
            { input: "12345", expectedOutput: "5" },
            { input: "0", expectedOutput: "1" },
            { input: "1000", expectedOutput: "4" }
        ],
        existingCode: {
            python: `def count_digits(n):\n    return len(str(n))  // Code from here`,
            cpp: `int countDigits(int n) {\n    int count = 0;\n    while (n != 0) {\n        count++;\n        n /= 10;\n    }\n    return count;  // Code from here\n}`,
            java: `public int countDigits(int n) {\n    return String.valueOf(n).length();  // Code from here\n}`,
            javascript: `function countDigits(n) {\n    return String(n).length;  // Code from here\n}`,
            c: `int countDigits(int n) {\n    int count = 0;\n    do {\n        count++;\n        n /= 10;\n    } while (n != 0);\n    return count;  // Code from here\n}`
        }
    },
    // Problem 10
    {
        id: "d4e5f6g7a8b1c2h3",
        category: "DSA & Problem Solving",
        title: "Find Duplicates in List",
        description: "Given a list of numbers, identify any duplicates in the list.",
        time_limit: 5,
        points: 15,
        difficulty: "Easy",
        base_price: 20,
        exampleInput: "[1, 2, 3, 3, 4]",
        exampleOutput: "[3]",
        testCases: [
            { input: "[1, 2, 3, 3, 4]", expectedOutput: "[3]" },
            { input: "[5, 5, 5]", expectedOutput: "[5]" },
            { input: "[1, 2, 3]", expectedOutput: "[]" }
        ],
        existingCode: {
            python: `def find_duplicates(arr):\n    return [x for x in set(arr) if arr.count(x) > 1]  // Code from here`,
            cpp: `#include <vector>\n#include <unordered_set>\nstd::vector<int> findDuplicates(std::vector<int> arr) {\n    std::unordered_set<int> seen, duplicates;\n    for (int n : arr) {\n        if (seen.count(n)) duplicates.insert(n);\n        else seen.insert(n);\n    }\n    return std::vector<int>(duplicates.begin(), duplicates.end());  // Code from here\n}`,
            java: `import java.util.*;\npublic List<Integer> findDuplicates(List<Integer> arr) {\n    Set<Integer> seen = new HashSet<>(), duplicates = new HashSet<>();\n    for (int n : arr) if (!seen.add(n)) duplicates.add(n);\n    return new ArrayList<>(duplicates);  // Code from here\n}`,
            javascript: `function findDuplicates(arr) {\n    let seen = new Set(), duplicates = new Set();\n    arr.forEach(n => seen.has(n) ? duplicates.add(n) : seen.add(n));\n    return Array.from(duplicates);  // Code from here\n}`,
            c: `#include <stdio.h>\n#include <stdlib.h>\nvoid findDuplicates(int arr[], int n) {\n    int *seen = (int*)calloc(1000, sizeof(int));  // assuming max 1000 values\n    for (int i = 0; i < n; i++) {\n        if (seen[arr[i]]) printf("%d ", arr[i]);\n        else seen[arr[i]] = 1;\n    }\n    free(seen);  // Code from here\n}`
        }
    },
    // Problem 11
    {
        id: "dsa11e8f7g6h5i4j3",
        category: "DSA & Problem Solving",
        title: "Calculate Average of Numbers",
        description: "Given a list of numbers, calculate the average (mean) of the numbers.",
        time_limit: 5,
        points: 10,
        difficulty: "Easy",
        base_price: 15,
        exampleInput: "[2, 4, 6, 8]",
        exampleOutput: "5.0",
        testCases: [
            { input: "[2, 4, 6, 8]", expectedOutput: "5.0" },
            { input: "[1, 1, 1, 1]", expectedOutput: "1.0" },
            { input: "[10, 20, 30, 40]", expectedOutput: "25.0" }
        ],
        existingCode: {
            python: `def calculate_average(arr):\n    return sum(arr) / len(arr)  # Code from here`,
            cpp: `#include <vector>\ndouble calculateAverage(std::vector<int> arr) {\n    int sum = 0;\n    for (int n : arr) sum += n;\n    return sum / static_cast<double>(arr.size());  // Code from here\n}`,
            java: `public double calculateAverage(int[] arr) {\n    int sum = 0;\n    for (int n : arr) sum += n;\n    return (double)sum / arr.length;  // Code from here\n}`,
            javascript: `function calculateAverage(arr) {\n    return arr.reduce((a, b) => a + b, 0) / arr.length;  // Code from here\n}`,
            c: `double calculateAverage(int arr[], int n) {\n    int sum = 0;\n    for (int i = 0; i < n; i++) sum += arr[i];\n    return sum / (double)n;  // Code from here\n}`
        }
    },
    // Problem 12
    {
        id: "dsa12a3b4c5d6e7f8",
        category: "DSA & Problem Solving",
        title: "Check Prime Number",
        description: "Write a function to check if a given number is prime.",
        time_limit: 6,
        points: 15,
        difficulty: "Easy",
        base_price: 20,
        exampleInput: "7",
        exampleOutput: "True",
        testCases: [
            { input: "7", expectedOutput: "True" },
            { input: "4", expectedOutput: "False" },
            { input: "11", expectedOutput: "True" }
        ],
        existingCode: {
            python: `def is_prime(n):\n    if n <= 1:\n        return False\n    for i in range(2, int(n ** 0.5) + 1):\n        if n % i == 0:\n            return False\n    return True  # Code from here`,
            cpp: `bool isPrime(int n) {\n    if (n <= 1) return false;\n    for (int i = 2; i * i <= n; i++) if (n % i == 0) return false;\n    return true;  // Code from here\n}`,
            java: `public boolean isPrime(int n) {\n    if (n <= 1) return false;\n    for (int i = 2; i * i <= n; i++) if (n % i == 0) return false;\n    return true;  // Code from here\n}`,
            javascript: `function isPrime(n) {\n    if (n <= 1) return false;\n    for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;\n    return true;  // Code from here\n}`,
            c: `int isPrime(int n) {\n    if (n <= 1) return 0;\n    for (int i = 2; i * i <= n; i++) if (n % i == 0) return 0;\n    return 1;  // Code from here\n}`
        }
    },
    // Problem 13
    {
        id: "dsa13g8h7i6j5k4l3",
        category: "DSA & Problem Solving",
        title: "Count Words in Sentence",
        description: "Given a sentence, count the number of words in it.",
        time_limit: 4,
        points: 10,
        difficulty: "Easy",
        base_price: 15,
        exampleInput: '"I like you"',
        exampleOutput: "3",
        testCases: [
            { input: '"I like you"', expectedOutput: "3" },
            { input: '"This is a test"', expectedOutput: "4" },
            { input: '"Hello"', expectedOutput: "1" }
        ],
        existingCode: {
            python: `def count_words(sentence):\n    return len(sentence.split())  # Code from here`,
            cpp: `#include <string>\n#include <sstream>\nint countWords(std::string sentence) {\n    std::istringstream iss(sentence);\n    return std::distance(std::istream_iterator<std::string>(iss), std::istream_iterator<std::string>());  // Code from here\n}`,
            java: `public int countWords(String sentence) {\n    return sentence.trim().split("\\\\s+").length;  // Code from here\n}`,
            javascript: `function countWords(sentence) {\n    return sentence.trim().split(/\\s+/).length;  // Code from here\n}`,
            c: `int countWords(char sentence[]) {\n    int count = 0;\n    char *token = strtok(sentence, " ");\n    while (token) {\n        count++;\n        token = strtok(NULL, " ");\n    }\n    return count;  // Code from here\n}`
        }
    },
    // Problem 14
    {
        id: "dsa14k5l6m7n8o9p1q",
        category: "DSA & Problem Solving",
        title: "Find Second Largest Number",
        description: "Given a list of numbers, find the second largest number.",
        time_limit: 7,
        points: 20,
        difficulty: "Easy",
        base_price: 25,
        exampleInput: "[5, 3, 9, 1]",
        exampleOutput: "5",
        testCases: [
            { input: "[5, 3, 9, 1]", expectedOutput: "5" },
            { input: "[7, 10, 5]", expectedOutput: "7" },
            { input: "[1, 1, 2]", expectedOutput: "1" }
        ],
        existingCode: {
            python: `def second_largest(arr):\n    arr = list(set(arr))\n    arr.sort(reverse=True)\n    return arr[1] if len(arr) > 1 else None  # Code from here`,
            cpp: `#include <vector>\n#include <algorithm>\nint secondLargest(std::vector<int> arr) {\n    std::sort(arr.rbegin(), arr.rend());\n    return (arr.size() > 1) ? arr[1] : -1;  // Code from here\n}`,
            java: `public int secondLargest(int[] arr) {\n    Arrays.sort(arr);\n    return arr[arr.length - 2];  // Code from here\n}`,
            javascript: `function secondLargest(arr) {\n    let unique = [...new Set(arr)];\n    unique.sort((a, b) => b - a);\n    return unique[1];  // Code from here\n}`,
            c: `int secondLargest(int arr[], int n) {\n    int max = arr[0], second_max = -1;\n    for (int i = 1; i < n; i++) if (arr[i] > max) { second_max = max; max = arr[i]; }\n    return second_max;  // Code from here\n}`
        }
    },
    // Problem 15
    {
        id: "dsa15r2s3t4u5v6w7x",
        category: "DSA & Problem Solving",
        title: "Convert Celsius to Fahrenheit",
        description: "Write a function to convert a temperature from Celsius to Fahrenheit.",
        time_limit: 5,
        points: 10,
        difficulty: "Easy",
        base_price: 15,
        exampleInput: "25",
        exampleOutput: "77",
        testCases: [
            { input: "25", expectedOutput: "77" },
            { input: "0", expectedOutput: "32" },
            { input: "-10", expectedOutput: "14" }
        ],
        existingCode: {
            python: `def celsius_to_fahrenheit(c):\n    return c * 9/5 + 32  # Code from here`,
            cpp: `double celsiusToFahrenheit(double c) {\n    return c * 9.0 / 5.0 + 32;  // Code from here\n}`,
            java: `public double celsiusToFahrenheit(double c) {\n    return c * 9.0 / 5.0 + 32;  // Code from here\n}`,
            javascript: `function celsiusToFahrenheit(c) {\n    return c * 9 / 5 + 32;  // Code from here\n}`,
            c: `double celsiusToFahrenheit(double c) {\n    return c * 9.0 / 5.0 + 32;  // Code from here\n}`
        }
    },
    // Problem 16
    {
        id: "dsa16y7z8a1b2c3d4e",
        category: "DSA & Problem Solving",
        title: "Remove Duplicates from List",
        description: "Given a list of numbers, remove any duplicates and return the unique numbers.",
        time_limit: 5,
        points: 15,
        difficulty: "Easy",
        base_price: 20,
        exampleInput: "[1, 2, 2, 3, 4, 4]",
        exampleOutput: "[1, 2, 3, 4]",
        testCases: [
            { input: "[1, 2, 2, 3, 4, 4]", expectedOutput: "[1, 2, 3, 4]" },
            { input: "[5, 5, 6]", expectedOutput: "[5, 6]" },
            { input: "[7, 8, 7, 9]", expectedOutput: "[7, 8, 9]" }
        ],
        existingCode: {
            python: `def remove_duplicates(arr):\n    return list(set(arr))  # Code from here`,
            cpp: `#include <vector>\n#include <unordered_set>\nstd::vector<int> removeDuplicates(std::vector<int> arr) {\n    std::unordered_set<int> unique(arr.begin(), arr.end());\n    return std::vector<int>(unique.begin(), unique.end());  // Code from here\n}`,
            java: `import java.util.*;\npublic List<Integer> removeDuplicates(List<Integer> arr) {\n    return new ArrayList<>(new HashSet<>(arr));  // Code from here\n}`,
            javascript: `function removeDuplicates(arr) {\n    return [...new Set(arr)];  // Code from here\n}`,
            c: `#include <stdlib.h>\nvoid removeDuplicates(int arr[], int n) {\n    int *unique = (int*)malloc(n * sizeof(int));\n    int idx = 0;\n    for (int i = 0; i < n; i++) if (!exists(unique, arr[i], idx)) unique[idx++] = arr[i];  // Code from here\n}`
        }
    },
    // Problem 17
    {
        id: "dsa17f3g4h5i6j7k8l",
        category: "DSA & Problem Solving",
        title: "Count Consonants in String",
        description: "Write a function to count the number of consonants in a given string.",
        time_limit: 4,
        points: 10,
        difficulty: "Easy",
        base_price: 15,
        exampleInput: '"Meet me"',
        exampleOutput: "3",
        testCases: [
            { input: '"Meet me"', expectedOutput: "3" },
            { input: '"Auction"', expectedOutput: "4" },
            { input: '"OpenAI"', expectedOutput: "2" }
        ],
        existingCode: {
            python: `def count_consonants(s):\n    return sum(1 for c in s if c.lower() in 'bcdfghjklmnpqrstvwxyz')  # Code from here`,
            cpp: `int countConsonants(std::string s) {\n    int count = 0;\n    for (char c : s) if (!strchr("aeiouAEIOU", c)) count++;\n    return count;  // Code from here\n}`,
            java: `public int countConsonants(String s) {\n    return (int) s.chars().filter(c -> !"aeiouAEIOU".contains(Character.toString((char) c))).count();  // Code from here\n}`,
            javascript: `function countConsonants(s) {\n    return s.split('').filter(c => !'aeiouAEIOU'.includes(c)).length;  // Code from here\n}`,
            c: `int countConsonants(char s[]) {\n    int count = 0;\n    for (int i = 0; s[i] != '\\0'; i++) if (!strchr("aeiouAEIOU", s[i])) count++;\n    return count;  // Code from here\n}`
        }
    },
    // Problem 18
    {
        id: "dsa18k2l3m4n5o6p7q",
        category: "DSA & Problem Solving",
        title: "Calculate Simple Interest",
        description: "Calculate the simple interest given principal, rate, and time.",
        time_limit: 5,
        points: 10,
        difficulty: "Easy",
        base_price: 15,
        exampleInput: "Principal = 1000, Rate = 5%, Time = 2",
        exampleOutput: "100",
        testCases: [
            { input: "1000, 5, 2", expectedOutput: "100" },
            { input: "500, 3, 1", expectedOutput: "15" },
            { input: "2000, 5, 3", expectedOutput: "300" }
        ],
        existingCode: {
            python: `def calculate_interest(p, r, t):\n    return (p * r * t) / 100  // Code from here`,
            cpp: `double calculateInterest(double p, double r, double t) {\n    return (p * r * t) / 100.0;  // Code from here\n}`,
            java: `public double calculateInterest(double p, double r, double t) {\n    return (p * r * t) / 100.0;  // Code from here\n}`,
            javascript: `function calculateInterest(p, r, t) {\n    return (p * r * t) / 100;  // Code from here\n}`,
            c: `double calculateInterest(double p, double r, double t) {\n    return (p * r * t) / 100.0;  // Code from here\n}`
        }
    },
    // Problem 19
    {
        id: "dsa19r7s8t9u0v1w2x",
        category: "DSA & Problem Solving",
        title: "Find Factorial of Number",
        description: "Write a function to find the factorial of a given non-negative integer.",
        time_limit: 6,
        points: 15,
        difficulty: "Easy",
        base_price: 20,
        exampleInput: "5",
        exampleOutput: "120",
        testCases: [
            { input: "5", expectedOutput: "120" },
            { input: "3", expectedOutput: "6" },
            { input: "0", expectedOutput: "1" }
        ],
        existingCode: {
            python: `def factorial(n):\n    return 1 if n == 0 else n * factorial(n - 1)  // Code from here`,
            cpp: `int factorial(int n) {\n    return (n == 0) ? 1 : n * factorial(n - 1);  // Code from here\n}`,
            java: `public int factorial(int n) {\n    return (n == 0) ? 1 : n * factorial(n - 1);  // Code from here\n}`,
            javascript: `function factorial(n) {\n    return (n === 0) ? 1 : n * factorial(n - 1);  // Code from here\n}`,
            c: `int factorial(int n) {\n    return (n == 0) ? 1 : n * factorial(n - 1);  // Code from here\n}`
        }
    },
    // Problem 20
    {
        id: "dsa20y3z4a5b6c7d8e",
        category: "DSA & Problem Solving",
        title: "First Character of String",
        description: "Given a string, return the first character of the string.",
        time_limit: 4,
        points: 10,
        difficulty: "Easy",
        base_price: 15,
        exampleInput: '"Single"',
        exampleOutput: '"S"',
        testCases: [
            { input: '"Single"', expectedOutput: '"S"' },
            { input: '"Example"', expectedOutput: '"E"' },
            { input: '"Test"', expectedOutput: '"T"' }
        ],
        existingCode: {
            python: `def first_character(s):\n    return s[0] if s else ''  // Code from here`,
            cpp: `char firstCharacter(std::string s) {\n    return (s.empty()) ? '\\0' : s[0];  // Code from here\n}`,
            java: `public char firstCharacter(String s) {\n    return s.isEmpty() ? '\\0' : s.charAt(0);  // Code from here\n}`,
            javascript: `function firstCharacter(s) {\n    return s.length ? s[0] : '';  // Code from here\n}`,
            c: `char firstCharacter(char s[]) {\n    return s[0];  // Code from here\n}`
        }
    },
    // Problem 21
    {
        id: "dsa21z9y8x7w6v5u4t",
        category: "DSA & Problem Solving",
        title: "Count Letters in String",
        description: "Given a string, count the total number of letters (ignore spaces and punctuation).",
        time_limit: 6,
        points: 15,
        difficulty: "Easy",
        base_price: 20,
        exampleInput: '"Why are you Gay!?"',
        exampleOutput: "12",
        testCases: [
            { input: '"Why are you Gay?!"', expectedOutput: "12" },
            { input: '"OpenAI GPT-3"', expectedOutput: "8" },
            { input: '"Hello, World!"', expectedOutput: "10" }
        ],
        existingCode: {
            python: `def count_letters(s):\n    return sum(1 for c in s if c.isalpha())  # Code from here`,
            cpp: `int countLetters(std::string s) {\n    int count = 0;\n    for (char c : s) if (isalpha(c)) count++;\n    return count;  // Code from here\n}`,
            java: `public int countLetters(String s) {\n    return (int) s.chars().filter(Character::isLetter).count();  // Code from here\n}`,
            javascript: `function countLetters(s) {\n    return s.replace(/[^a-zA-Z]/g, "").length;  // Code from here\n}`,
            c: `int countLetters(char s[]) {\n    int count = 0;\n    for (int i = 0; s[i]; i++) if (isalpha(s[i])) count++;\n    return count;  // Code from here\n}`
        }
    },
    // Problem 22
    {
        id: "dsa22t5u4v3w2x1y9z",
        category: "DSA & Problem Solving",
        title: "Merge Two Sorted Arrays",
        description: "Given two sorted arrays, merge them into a single sorted array.",
        time_limit: 8,
        points: 20,
        difficulty: "Medium",
        base_price: 25,
        exampleInput: "[1, 3, 5], [2, 4, 6]",
        exampleOutput: "[1, 2, 3, 4, 5, 6]",
        testCases: [
            { input: "[1, 3, 5], [2, 4, 6]", expectedOutput: "[1, 2, 3, 4, 5, 6]" },
            { input: "[10, 20], [15, 25]", expectedOutput: "[10, 15, 20, 25]" },
            { input: "[], [1, 2, 3]", expectedOutput: "[1, 2, 3]" }
        ],
        existingCode: {
            python: `def merge_sorted(arr1, arr2):\n    return sorted(arr1 + arr2)  # Code from here`,
            cpp: `#include <vector>\n#include <algorithm>\nstd::vector<int> mergeSorted(std::vector<int> arr1, std::vector<int> arr2) {\n    arr1.insert(arr1.end(), arr2.begin(), arr2.end());\n    std::sort(arr1.begin(), arr1.end());\n    return arr1;  // Code from here\n}`,
            java: `import java.util.*;\npublic int[] mergeSorted(int[] arr1, int[] arr2) {\n    int[] result = new int[arr1.length + arr2.length];\n    System.arraycopy(arr1, 0, result, 0, arr1.length);\n    System.arraycopy(arr2, 0, result, arr1.length, arr2.length);\n    Arrays.sort(result);\n    return result;  // Code from here\n}`,
            javascript: `function mergeSorted(arr1, arr2) {\n    return [...arr1, ...arr2].sort((a, b) => a - b);  // Code from here\n}`,
            c: `void mergeSorted(int arr1[], int n1, int arr2[], int n2, int result[]) {\n    int i = 0, j = 0, k = 0;\n    while (i < n1 && j < n2) result[k++] = (arr1[i] < arr2[j]) ? arr1[i++] : arr2[j++];\n    while (i < n1) result[k++] = arr1[i++];\n    while (j < n2) result[k++] = arr2[j++];  // Code from here\n}`
        }
    },
    // Problem 23
    {
        id: "dsa23x4y5z6a7b8c9d",
        category: "DSA & Problem Solving",
        title: "Check Anagram",
        description: "Determine if two strings are anagrams of each other.",
        time_limit: 6,
        points: 15,
        difficulty: "Medium",
        base_price: 20,
        exampleInput: '"listen", "silent"',
        exampleOutput: "True",
        testCases: [
            { input: '"listen", "silent"', expectedOutput: "True" },
            { input: '"hello", "world"', expectedOutput: "False" },
            { input: '"race", "care"', expectedOutput: "True" }
        ],
        existingCode: {
            python: `def is_anagram(s1, s2):\n    return sorted(s1) == sorted(s2)  # Code from here`,
            cpp: `#include <algorithm>\nbool isAnagram(std::string s1, std::string s2) {\n    std::sort(s1.begin(), s1.end());\n    std::sort(s2.begin(), s2.end());\n    return s1 == s2;  // Code from here\n}`,
            java: `import java.util.Arrays;\npublic boolean isAnagram(String s1, String s2) {\n    char[] arr1 = s1.toCharArray(), arr2 = s2.toCharArray();\n    Arrays.sort(arr1);\n    Arrays.sort(arr2);\n    return Arrays.equals(arr1, arr2);  // Code from here\n}`,
            javascript: `function isAnagram(s1, s2) {\n    return s1.split('').sort().join('') === s2.split('').sort().join('');  // Code from here\n}`,
            c: `int isAnagram(char s1[], char s2[]) {\n    int count[256] = {0};\n    for (int i = 0; s1[i] && s2[i]; i++) { count[s1[i]]++; count[s2[i]]--; }\n    for (int i = 0; i < 256; i++) if (count[i]) return 0;\n    return 1;  // Code from here\n}`
        }
    },
    // Problem 24
    {
        id: "dsa24d5e6f7g8h9i0j",
        category: "DSA & Problem Solving",
        title: "Find Missing Number",
        description: "Given an array of integers from 1 to N with one number missing, find the missing number.",
        time_limit: 7,
        points: 20,
        difficulty: "Medium",
        base_price: 25,
        exampleInput: "[1, 2, 4, 5] (N=5)",
        exampleOutput: "3",
        testCases: [
            { input: "[1, 2, 4, 5]", expectedOutput: "3" },
            { input: "[2, 3, 4, 5]", expectedOutput: "1" },
            { input: "[1, 3, 4, 5]", expectedOutput: "2" }
        ],
        existingCode: {
            python: `def find_missing(arr, N):\n    return sum(range(1, N+1)) - sum(arr)  # Code from here`,
            cpp: `int findMissing(int arr[], int N) {\n    int total = N * (N + 1) / 2;\n    for (int i = 0; i < N - 1; i++) total -= arr[i];\n    return total;  // Code from here\n}`,
            java: `public int findMissing(int[] arr, int N) {\n    int total = N * (N + 1) / 2;\n    for (int n : arr) total -= n;\n    return total;  // Code from here\n}`,
            javascript: `function findMissing(arr, N) {\n    return (N * (N + 1)) / 2 - arr.reduce((a, b) => a + b, 0);  // Code from here\n}`,
            c: `int findMissing(int arr[], int N) {\n    int total = N * (N + 1) / 2;\n    for (int i = 0; i < N - 1; i++) total -= arr[i];\n    return total;  // Code from here\n}`
        }
    },
    // Problem 25
    {
        id: "dsa25k6l7m8n9o0p1q",
        category: "DSA & Problem Solving",
        title: "Reverse an Array",
        description: "Write a function to reverse the elements of an array.",
        time_limit: 5,
        points: 15,
        difficulty: "Easy",
        base_price: 20,
        exampleInput: "[1, 2, 3, 4, 5]",
        exampleOutput: "[5, 4, 3, 2, 1]",
        testCases: [
            { input: "[1, 2, 3, 4, 5]", expectedOutput: "[5, 4, 3, 2, 1]" },
            { input: "[10, 20, 30]", expectedOutput: "[30, 20, 10]" },
            { input: "[4, 3, 2, 1]", expectedOutput: "[1, 2, 3, 4]" }
        ],
        existingCode: {
            python: `def reverse_array(arr):\n    return arr[::-1]  # Code from here`,
            cpp: `#include <algorithm>\nvoid reverseArray(std::vector<int>& arr) {\n    std::reverse(arr.begin(), arr.end());  // Code from here\n}`,
            java: `public int[] reverseArray(int[] arr) {\n    for (int i = 0; i < arr.length / 2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[arr.length - i - 1];\n        arr[arr.length - i - 1] = temp;\n    }\n    return arr;  // Code from here\n}`,
            javascript: `function reverseArray(arr) {\n    return arr.reverse();  // Code from here\n}`,
            c: `void reverseArray(int arr[], int n) {\n    for (int i = 0; i < n / 2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[n - i - 1];\n        arr[n - i - 1] = temp;\n    }  // Code from here\n}`
        }
    },
    // Problem 26
    {
        id: "dsa26y8z9a1b2c3d4e",
        category: "DSA & Problem Solving",
        title: "Count Unique Elements",
        description: "Given an array of integers, count the number of unique elements.",
        time_limit: 5,
        points: 15,
        difficulty: "Easy",
        base_price: 20,
        exampleInput: "[1, 2, 3, 4, 4, 4]",
        exampleOutput: "4",
        testCases: [
            { input: "[1, 2, 3, 4, 4, 4]", expectedOutput: "4" },
            { input: "[5, 5, 5, 5]", expectedOutput: "1" },
            { input: "[10, 20, 20, 30]", expectedOutput: "3" }
        ],
        existingCode: {
            python: `def count_unique(arr):\n    return len(set(arr))  # Code from here`,
            cpp: `#include <unordered_set>\nint countUnique(std::vector<int> arr) {\n    std::unordered_set<int> unique(arr.begin(), arr.end());\n    return unique.size();  // Code from here\n}`,
            java: `public int countUnique(int[] arr) {\n    return (int) Arrays.stream(arr).distinct().count();  // Code from here\n}`,
            javascript: `function countUnique(arr) {\n    return new Set(arr).size;  // Code from here\n}`,
            c: `int countUnique(int arr[], int n) {\n    int count = 0;\n    int seen[1000] = {0};\n    for (int i = 0; i < n; i++) if (!seen[arr[i]]++) count++;\n    return count;  // Code from here\n}`
        }
    },
    // Problem 27
    {
        id: "dsa27j3k4l5m6n7o8p",
        category: "DSA & Problem Solving",
        title: "Sum of Digits",
        description: "Given a non-negative integer, calculate the sum of its digits.",
        time_limit: 5,
        points: 10,
        difficulty: "Easy",
        base_price: 15,
        exampleInput: "143",
        exampleOutput: "8",
        testCases: [
            { input: "143", expectedOutput: "8" },
            { input: "999", expectedOutput: "27" },
            { input: "12345", expectedOutput: "15" }
        ],
        existingCode: {
            python: `def sum_of_digits(n):\n    return sum(int(d) for d in str(n))  # Code from here`,
            cpp: `int sumOfDigits(int n) {\n    int sum = 0;\n    while (n) { sum += n % 10; n /= 10; }\n    return sum;  // Code from here\n}`,
            java: `public int sumOfDigits(int n) {\n    int sum = 0;\n    while (n > 0) { sum += n % 10; n /= 10; }\n    return sum;  // Code from here\n}`,
            javascript: `function sumOfDigits(n) {\n    return String(n).split('').reduce((sum, d) => sum + Number(d), 0);  // Code from here\n}`,
            c: `int sumOfDigits(int n) {\n    int sum = 0;\n    while (n) { sum += n % 10; n /= 10; }\n    return sum;  // Code from here\n}`
        }
    },
    // Problem 28
    {
        id: "dsa28q7r8s9t0u1v2w",
        category: "DSA & Problem Solving",
        title: "Find GCD of Two Numbers",
        description: "Write a function to find the GCD of two numbers.",
        time_limit: 6,
        points: 15,
        difficulty: "Medium",
        base_price: 20,
        exampleInput: "8, 12",
        exampleOutput: "4",
        testCases: [
            { input: "8, 12", expectedOutput: "4" },
            { input: "7, 3", expectedOutput: "1" },
            { input: "24, 36", expectedOutput: "12" }
        ],
        existingCode: {
            python: `def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a  # Code from here`,
            cpp: `int gcd(int a, int b) {\n    return (b == 0) ? a : gcd(b, a % b);  // Code from here\n}`,
            java: `public int gcd(int a, int b) {\n    return (b == 0) ? a : gcd(b, a % b);  // Code from here\n}`,
            javascript: `function gcd(a, b) {\n    return b === 0 ? a : gcd(b, a % b);  // Code from here\n}`,
            c: `int gcd(int a, int b) {\n    return (b == 0) ? a : gcd(b, a % b);  // Code from here\n}`
        }
    },
    // Problem 29
    {
        id: "dsa29a1b2c3d4e5f6g",
        category: "DSA & Problem Solving",
        title: "Check Integer Palindrome",
        description: "Determine if a given integer is a palindrome.",
        time_limit: 5,
        points: 15,
        difficulty: "Easy",
        base_price: 20,
        exampleInput: "121",
        exampleOutput: "True",
        testCases: [
            { input: "121", expectedOutput: "True" },
            { input: "123", expectedOutput: "False" },
            { input: "1331", expectedOutput: "True" }
        ],
        existingCode: {
            python: `def is_palindrome(n):\n    s = str(n)\n    return s == s[::-1]  # Code from here`,
            cpp: `bool isPalindrome(int n) {\n    int rev = 0, num = n;\n    while (num) { rev = rev * 10 + num % 10; num /= 10; }\n    return n == rev;  // Code from here\n}`,
            java: `public boolean isPalindrome(int n) {\n    int rev = 0, num = n;\n    while (num > 0) { rev = rev * 10 + num % 10; num /= 10; }\n    return n == rev;  // Code from here\n}`,
            javascript: `function isPalindrome(n) {\n    let s = String(n);\n    return s === s.split('').reverse().join('');  // Code from here\n}`,
            c: `int isPalindrome(int n) {\n    int rev = 0, num = n;\n    while (num) { rev = rev * 10 + num % 10; num /= 10; }\n    return n == rev;  // Code from here\n}`
        }
    },
    // Problem 30
    {
        id: "dsa30h7i8j9k0l1m2n",
        category: "DSA & Problem Solving",
        title: "Rotate Array to Right",
        description: "Rotate an array to the right by a given number of steps.",
        time_limit: 7,
        points: 20,
        difficulty: "Medium",
        base_price: 25,
        exampleInput: "[1, 2, 3, 4, 5], steps = 2",
        exampleOutput: "[4, 5, 1, 2, 3]",
        testCases: [
            { input: "[1, 2, 3, 4, 5], steps = 2", expectedOutput: "[4, 5, 1, 2, 3]" },
            { input: "[10, 20, 30], steps = 1", expectedOutput: "[30, 10, 20]" },
            { input: "[5, 3, 8, 6], steps = 3", expectedOutput: "[3, 8, 6, 5]" }
        ],
        existingCode: {
            python: `def rotate_array(arr, k):\n    k %= len(arr)\n    return arr[-k:] + arr[:-k]  # Code from here`,
            cpp: `#include <vector>\nvoid rotateArray(std::vector<int>& arr, int k) {\n    k %= arr.size();\n    std::rotate(arr.begin(), arr.end() - k, arr.end());  // Code from here\n}`,
            java: `public int[] rotateArray(int[] arr, int k) {\n    k %= arr.length;\n    int[] rotated = new int[arr.length];\n    System.arraycopy(arr, arr.length - k, rotated, 0, k);\n    System.arraycopy(arr, 0, rotated, k, arr.length - k);\n    return rotated;  // Code from here\n}`,
            javascript: `function rotateArray(arr, k) {\n    k %= arr.length;\n    return [...arr.slice(-k), ...arr.slice(0, -k)];  // Code from here\n}`,
            c: `void rotateArray(int arr[], int n, int k) {\n    k %= n;\n    reverse(arr, n - k);\n    reverse(arr, n);\n}  // Code from here\n}`
        }
    },
    // Problem 31
    {
        id: "dsa31p0q1r2s3t4u5v",
        category: "DSA & Problem Solving",
        title: "Nth Fibonacci Term (Iterative)",
        description: "Write a function to return the Nth term of the Fibonacci sequence using iteration.",
        time_limit: 7,
        points: 20,
        difficulty: "Medium",
        base_price: 30,
        exampleInput: "N = 6",
        exampleOutput: "8",
        testCases: [
            { input: "6", expectedOutput: "8" },
            { input: "10", expectedOutput: "55" },
            { input: "15", expectedOutput: "610" }
        ],
        existingCode: {
            python: `def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a  # Code from here`,
            cpp: `int fibonacci(int n) {\n    int a = 0, b = 1;\n    for (int i = 1; i < n; i++) {\n        int temp = a + b;\n        a = b;\n        b = temp;\n    }\n    return b;  // Code from here\n}`,
            java: `public int fibonacci(int n) {\n    int a = 0, b = 1;\n    for (int i = 1; i < n; i++) {\n        int temp = a + b;\n        a = b;\n        b = temp;\n    }\n    return b;  // Code from here\n}`,
            javascript: `function fibonacci(n) {\n    let a = 0, b = 1;\n    for (let i = 1; i < n; i++) {\n        [a, b] = [b, a + b];\n    }\n    return b;  // Code from here\n}`,
            c: `int fibonacci(int n) {\n    int a = 0, b = 1;\n    for (int i = 1; i < n; i++) {\n        int temp = a + b;\n        a = b;\n        b = temp;\n    }\n    return b;  // Code from here\n}`
        }
    },
    // Problem 32
    {
        id: "dsa32w6x7y8z9a1b2c",
        category: "DSA & Problem Solving",
        title: "Find Duplicates in Array",
        description: "Given an array of integers, return a list of duplicate elements.",
        time_limit: 8,
        points: 25,
        difficulty: "Medium",
        base_price: 35,
        exampleInput: "[1, 2, 3, 2, 4, 4]",
        exampleOutput: "[2, 4]",
        testCases: [
            { input: "[1, 2, 3, 2, 4, 4]", expectedOutput: "[2, 4]" },
            { input: "[5, 5, 5, 6]", expectedOutput: "[5]" },
            { input: "[10, 20, 30]", expectedOutput: "[]" }
        ],
        existingCode: {
            python: `def find_duplicates(arr):\n    return [x for x in set(arr) if arr.count(x) > 1]  # Code from here`,
            cpp: `#include <vector>\n#include <unordered_map>\nstd::vector<int> findDuplicates(std::vector<int> arr) {\n    std::unordered_map<int, int> count;\n    std::vector<int> result;\n    for (int n : arr) count[n]++;\n    for (auto p : count) if (p.second > 1) result.push_back(p.first);\n    return result;  // Code from here\n}`,
            java: `import java.util.*;\npublic List<Integer> findDuplicates(List<Integer> arr) {\n    Set<Integer> seen = new HashSet<>(), duplicates = new HashSet<>();\n    for (int num : arr) if (!seen.add(num)) duplicates.add(num);\n    return new ArrayList<>(duplicates);  // Code from here\n}`,
            javascript: `function findDuplicates(arr) {\n    const seen = new Set(), duplicates = new Set();\n    arr.forEach(num => seen.has(num) ? duplicates.add(num) : seen.add(num));\n    return [...duplicates];  // Code from here\n}`,
            c: `int* findDuplicates(int arr[], int n, int* resSize) {\n    int freq[1000] = {0};\n    for (int i = 0; i < n; i++) freq[arr[i]]++;\n    int* result = malloc(n * sizeof(int));\n    int count = 0;\n    for (int i = 0; i < n; i++) if (freq[arr[i]] > 1) result[count++] = arr[i];\n    *resSize = count;\n    return result;  // Code from here\n}`
        }
    },
    // Problem 33
    {
        id: "dsa33c5d6e7f8g9h0i",
        category: "DSA & Problem Solving",
        title: "Find Target in Array",
        description: "Given an array of integers and a target number, check if the target number exists in the array.",
        time_limit: 5,
        points: 15,
        difficulty: "Medium",
        base_price: 25,
        exampleInput: "Array: [5, 3, 8, 1, 2], Target: 3",
        exampleOutput: "True",
        testCases: [
            { input: "[5, 3, 8, 1, 2], 3", expectedOutput: "True" },
            { input: "[7, 9, 11], 5", expectedOutput: "False" },
            { input: "[12, 15, 18], 18", expectedOutput: "True" }
        ],
        existingCode: {
            python: `def find_target(arr, target):\n    return target in arr  # Code from here`,
            cpp: `bool findTarget(std::vector<int> arr, int target) {\n    return std::find(arr.begin(), arr.end(), target) != arr.end();  // Code from here\n}`,
            java: `public boolean findTarget(int[] arr, int target) {\n    for (int num : arr) if (num == target) return true;\n    return false;  // Code from here\n}`,
            javascript: `function findTarget(arr, target) {\n    return arr.includes(target);  // Code from here\n}`,
            c: `int findTarget(int arr[], int n, int target) {\n    for (int i = 0; i < n; i++) if (arr[i] == target) return 1;\n    return 0;  // Code from here\n}`
        }
    },
    // Problem 34
    {
        id: "dsa34j8k9l0m1n2o3p",
        category: "DSA & Problem Solving",
        title: "Longest Increasing Subsequence",
        description: "Given an array of integers, find the length of the longest increasing subsequence.",
        time_limit: 12,
        points: 35,
        difficulty: "Hard",
        base_price: 50,
        exampleInput: "[10, 9, 2, 5, 3, 7, 101, 18]",
        exampleOutput: "4",
        testCases: [
            { input: "[10, 9, 2, 5, 3, 7, 101, 18]", expectedOutput: "4" },
            { input: "[0, 1, 0, 3, 2, 3]", expectedOutput: "4" },
            { input: "[7, 7, 7, 7, 7]", expectedOutput: "1" }
        ],
        existingCode: {
            python: `def length_of_lis(nums):\n    dp = [1] * len(nums)\n    for i in range(1, len(nums)):\n        for j in range(i):\n            if nums[i] > nums[j]:\n                dp[i] = max(dp[i], dp[j] + 1)\n    return max(dp)  # Code from here`,
            cpp: `int lengthOfLIS(vector<int>& nums) {\n    vector<int> dp(nums.size(), 1);\n    for (int i = 1; i < nums.size(); i++)\n        for (int j = 0; j < i; j++)\n            if (nums[i] > nums[j]) dp[i] = max(dp[i], dp[j] + 1);\n    return *max_element(dp.begin(), dp.end());  // Code from here\n}`,
            java: `public int lengthOfLIS(int[] nums) {\n    int[] dp = new int[nums.length];\n    Arrays.fill(dp, 1);\n    for (int i = 1; i < nums.length; i++)\n        for (int j = 0; j < i; j++)\n            if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);\n    return Arrays.stream(dp).max().getAsInt();  // Code from here\n}`,
            javascript: `function lengthOfLIS(nums) {\n    const dp = Array(nums.length).fill(1);\n    for (let i = 1; i < nums.length; i++)\n        for (let j = 0; j < i; j++)\n            if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);\n    return Math.max(...dp);  // Code from here\n}`,
            c: `int lengthOfLIS(int* nums, int n) {\n    int dp[n], max_len = 1;\n    for (int i = 0; i < n; i++) dp[i] = 1;\n    for (int i = 1; i < n; i++)\n        for (int j = 0; j < i; j++)\n            if (nums[i] > nums[j]) dp[i] = (dp[i] > dp[j] + 1) ? dp[i] : dp[j] + 1;\n    for (int i = 0; i < n; i++) max_len = (dp[i] > max_len) ? dp[i] : max_len;\n    return max_len;  // Code from here\n}`
        }
    },
    // Problem 35
    {
        id: "dsa35s3t4u5v6w7x8y",
        category: "DSA & Problem Solving",
        title: "Knapsack Problem",
        description: "Given weights and values of N items, determine the maximum value that can be obtained with a knapsack of capacity W.",
        time_limit: 15,
        points: 40,
        difficulty: "Hard",
        base_price: 55,
        exampleInput: "Weights: [1, 2, 3], Values: [10, 15, 40], W = 6",
        exampleOutput: "55",
        testCases: [
            { input: "[1, 2, 3], [10, 15, 40], 6", expectedOutput: "55" },
            { input: "[4, 5, 1], [1, 2, 3], 5", expectedOutput: "3" },
            { input: "[10, 20], [30, 40], 10", expectedOutput: "30" }
        ],
        existingCode: {
            python: `def knapsack(weights, values, W):\n    n = len(weights)\n    dp = [[0] * (W + 1) for _ in range(n + 1)]\n    for i in range(1, n + 1):\n        for w in range(W + 1):\n            if weights[i - 1] <= w:\n                dp[i][w] = max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]])\n            else:\n                dp[i][w] = dp[i - 1][w]\n    return dp[n][W]  # Code from here`,
            cpp: `int knapsack(int weights[], int values[], int W, int n) {\n    int dp[n + 1][W + 1];\n    for (int i = 0; i <= n; i++) {\n        for (int w = 0; w <= W; w++) {\n            if (i == 0 || w == 0) dp[i][w] = 0;\n            else if (weights[i - 1] <= w) dp[i][w] = max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);\n            else dp[i][w] = dp[i - 1][w];\n        }\n    }\n    return dp[n][W];  // Code from here\n}`,
            java: `public int knapsack(int[] weights, int[] values, int W) {\n    int n = weights.length;\n    int[][] dp = new int[n + 1][W + 1];\n    for (int i = 1; i <= n; i++) {\n        for (int w = 1; w <= W; w++) {\n            if (weights[i - 1] <= w) dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);\n            else dp[i][w] = dp[i - 1][w];\n        }\n    }\n    return dp[n][W];  // Code from here\n}`,
            javascript: `function knapsack(weights, values, W) {\n    const n = weights.length, dp = Array(n + 1).fill().map(() => Array(W + 1).fill(0));\n    for (let i = 1; i <= n; i++) {\n        for (let w = 0; w <= W; w++) {\n            dp[i][w] = weights[i - 1] <= w ? Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]) : dp[i - 1][w];\n        }\n    }\n    return dp[n][W];  // Code from here\n}`,
            c: `int knapsack(int weights[], int values[], int W, int n) {\n    int dp[n + 1][W + 1];\n    for (int i = 0; i <= n; i++) {\n        for (int w = 0; w <= W; w++) {\n            if (i == 0 || w == 0) dp[i][w] = 0;\n            else if (weights[i - 1] <= w) dp[i][w] = (values[i - 1] + dp[i - 1][w - weights[i - 1]] > dp[i - 1][w]) ? values[i - 1] + dp[i - 1][w - weights[i - 1]] : dp[i - 1][w];\n            else dp[i][w] = dp[i - 1][w];\n        }\n    }\n    return dp[n][W];  // Code from here\n}`
        }
    },
    // Problem 36
    {
        id: "dsa36q3r4s5t6u7v8w",
        category: "DSA & Problem Solving",
        title: "Kth Largest Element in Array",
        description: "Given an array, find the Kth largest element in the array.",
        time_limit: 10,
        points: 30,
        difficulty: "Hard",
        base_price: 50,
        exampleInput: "Array: [3, 2, 1, 5, 6, 4], K = 2",
        exampleOutput: "5",
        testCases: [
            { input: "[3, 2, 1, 5, 6, 4], 2", expectedOutput: "5" },
            { input: "[7, 10, 4, 3, 20, 15], 3", expectedOutput: "10" },
            { input: "[1, 2, 3, 4, 5], 1", expectedOutput: "5" }
        ],
        existingCode: {
            python: `import heapq\ndef find_kth_largest(nums, k):\n    return heapq.nlargest(k, nums)[-1]  # Code from here`,
            cpp: `#include <queue>\nint findKthLargest(std::vector<int>& nums, int k) {\n    std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;\n    for (int num : nums) {\n        minHeap.push(num);\n        if (minHeap.size() > k) minHeap.pop();\n    }\n    return minHeap.top();  // Code from here\n}`,
            java: `import java.util.PriorityQueue;\npublic int findKthLargest(int[] nums, int k) {\n    PriorityQueue<Integer> minHeap = new PriorityQueue<>();\n    for (int num : nums) {\n        minHeap.add(num);\n        if (minHeap.size() > k) minHeap.poll();\n    }\n    return minHeap.peek();  // Code from here\n}`,
            javascript: `function findKthLargest(nums, k) {\n    nums.sort((a, b) => b - a);\n    return nums[k - 1];  // Code from here\n}`,
            c: `int findKthLargest(int arr[], int n, int k) {\n    qsort(arr, n, sizeof(int), compare);\n    return arr[n - k];  // Code from here\n}`
        }
    },
    // Problem 37
    {
        id: "dsa37x1y2z3a4b5c6d",
        category: "DSA & Problem Solving",
        title: "Coin Change Combinations",
        description: "Given a set of coins and a total amount, determine the number of ways to make the amount using the coins.",
        time_limit: 12,
        points: 35,
        difficulty: "Hard",
        base_price: 55,
        exampleInput: "Coins: [1, 2, 5], Amount: 5",
        exampleOutput: "4",
        testCases: [
            { input: "[1, 2, 5], 5", expectedOutput: "4" },
            { input: "[2, 3, 7], 7", expectedOutput: "2" },
            { input: "[1, 2], 4", expectedOutput: "3" }
        ],
        existingCode: {
            python: `def coin_change_combinations(coins, amount):\n    dp = [0] * (amount + 1)\n    dp[0] = 1\n    for coin in coins:\n        for x in range(coin, amount + 1):\n            dp[x] += dp[x - coin]\n    return dp[amount]  # Code from here`,
            cpp: `int coinChangeCombinations(std::vector<int>& coins, int amount) {\n    std::vector<int> dp(amount + 1, 0);\n    dp[0] = 1;\n    for (int coin : coins)\n        for (int x = coin; x <= amount; x++)\n            dp[x] += dp[x - coin];\n    return dp[amount];  // Code from here\n}`,
            java: `public int coinChangeCombinations(int[] coins, int amount) {\n    int[] dp = new int[amount + 1];\n    dp[0] = 1;\n    for (int coin : coins)\n        for (int x = coin; x <= amount; x++)\n            dp[x] += dp[x - coin];\n    return dp[amount];  // Code from here\n}`,
            javascript: `function coinChangeCombinations(coins, amount) {\n    const dp = Array(amount + 1).fill(0);\n    dp[0] = 1;\n    coins.forEach(coin => {\n        for (let x = coin; x <= amount; x++) dp[x] += dp[x - coin];\n    });\n    return dp[amount];  // Code from here\n}`,
            c: `int coinChangeCombinations(int coins[], int n, int amount) {\n    int dp[amount + 1];\n    memset(dp, 0, sizeof(dp));\n    dp[0] = 1;\n    for (int i = 0; i < n; i++)\n        for (int x = coins[i]; x <= amount; x++)\n            dp[x] += dp[x - coins[i]];\n    return dp[amount];  // Code from here\n}`
        }
    },
    // Problem 38
    {
        id: "dsa38e6f7g8h9i0j1k2",
        category: "DSA & Problem Solving",
        title: "Generate Parentheses Combinations",
        description: "Given n pairs of parentheses, generate all combinations of well-formed parentheses.",
        time_limit: 10,
        points: 30,
        difficulty: "Hard",
        base_price: 50,
        exampleInput: "n = 3",
        exampleOutput: '["((()))","(()())","(())()","()(())","()()()"]',
        testCases: [
            { input: "3", expectedOutput: '["((()))","(()())","(())()","()(())","()()()"]' },
            { input: "2", expectedOutput: '["(())","()()"]' },
            { input: "1", expectedOutput: '["()"]' }
        ],
        existingCode: {
            python: `def generate_parentheses(n):\n    def backtrack(s, left, right):\n        if len(s) == 2 * n:\n            res.append(s)\n            return\n        if left < n: backtrack(s + '(', left + 1, right)\n        if right < left: backtrack(s + ')', left, right + 1)\n    res = []\n    backtrack("", 0, 0)\n    return res  # Code from here`,
            cpp: `void generateParentheses(int n, std::string s, int left, int right, std::vector<std::string>& result) {\n    if (s.length() == 2 * n) { result.push_back(s); return; }\n    if (left < n) generateParentheses(n, s + "(", left + 1, right, result);\n    if (right < left) generateParentheses(n, s + ")", left, right + 1, result);  // Code from here\n}`,
            java: `public List<String> generateParentheses(int n) {\n    List<String> result = new ArrayList<>();\n    backtrack(result, "", 0, 0, n);\n    return result;\n}\nprivate void backtrack(List<String> res, String s, int left, int right, int max) {\n    if (s.length() == max * 2) { res.add(s); return; }\n    if (left < max) backtrack(res, s + "(", left + 1, right, max);\n    if (right < left) backtrack(res, s + ")", left, right + 1, max);  // Code from here\n}`,
            javascript: `function generateParentheses(n) {\n    const res = [];\n    function backtrack(s, left, right) {\n        if (s.length === 2 * n) { res.push(s); return; }\n        if (left < n) backtrack(s + "(", left + 1, right);\n        if (right < left) backtrack(s + ")", left, right + 1);\n    }\n    backtrack("", 0, 0);\n    return res;  // Code from here\n}`,
            c: `void generateParentheses(int n, char* s, int pos, int left, int right, char** res, int* count) {\n    if (pos == 2 * n) { res[*count] = strdup(s); (*count)++; return; }\n    if (left < n) { s[pos] = '('; generateParentheses(n, s, pos + 1, left + 1, right, res, count); }\n    if (right < left) { s[pos] = ')'; generateParentheses(n, s, pos + 1, left, right + 1, res, count); }\n}`
        }
    },
    // Problem 39
    {
        id: "dsa39l3m4n5o6p7q8r",
        category: "DSA & Problem Solving",
        title: "K Most Frequent Elements",
        description: "Given a non-empty array of integers, return the k most frequent elements.",
        time_limit: 10,
        points: 30,
        difficulty: "Hard",
        base_price: 50,
        exampleInput: "Array: [1,1,1,2,2,3], k = 2",
        exampleOutput: "[1,2]",
        testCases: [
            { input: "[1,1,1,2,2,3], 2", expectedOutput: "[1,2]" },
            { input: "[4,4,4,5,5,5,6], 1", expectedOutput: "[4,5]" },
            { input: "[3,3,3,1,1,1,2,2], 3", expectedOutput: "[1,2,3]" }
        ],
        existingCode: {
            python: `from collections import Counter\nimport heapq\ndef k_most_frequent(nums, k):\n    return [item[0] for item in Counter(nums).most_common(k)]  # Code from here`,
            cpp: `#include <unordered_map>\n#include <queue>\nstd::vector<int> kMostFrequent(std::vector<int>& nums, int k) {\n    std::unordered_map<int, int> freq;\n    for (int num : nums) freq[num]++;\n    std::priority_queue<std::pair<int, int>> maxHeap;\n    for (auto it : freq) maxHeap.push({it.second, it.first});\n    std::vector<int> result;\n    while (k--) {\n        result.push_back(maxHeap.top().second);\n        maxHeap.pop();\n    }\n    return result;  // Code from here\n}`,
            java: `import java.util.*;\npublic List<Integer> kMostFrequent(int[] nums, int k) {\n    Map<Integer, Integer> freq = new HashMap<>();\n    for (int num : nums) freq.put(num, freq.getOrDefault(num, 0) + 1);\n    PriorityQueue<Integer> heap = new PriorityQueue<>(Comparator.comparingInt(freq::get));\n    freq.keySet().forEach(n -> { heap.add(n); if (heap.size() > k) heap.poll(); });\n    return new ArrayList<>(heap);  // Code from here\n}`,
            javascript: `function kMostFrequent(nums, k) {\n    const freq = {};\n    nums.forEach(n => freq[n] = (freq[n] || 0) + 1);\n    return Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, k).map(item => +item[0]);  // Code from here\n}`,
            c: `typedef struct { int val; int freq; } Pair;\nint compare(const void* a, const void* b) { return ((Pair*)b)->freq - ((Pair*)a)->freq; }\nint* kMostFrequent(int arr[], int n, int k, int* returnSize) {\n    Pair freq[1000] = {0};\n    for (int i = 0; i < n; i++) freq[arr[i]].val = arr[i], freq[arr[i]].freq++;\n    qsort(freq, 1000, sizeof(Pair), compare);\n    int* result = malloc(k * sizeof(int));\n    for (int i = 0; i < k; i++) result[i] = freq[i].val;\n    *returnSize = k;\n    return result;  // Code from here\n}`
        }
    },
    // Problem 40
    {
        id: "dsa40s5t6u7v8w9x0y",
        category: "DSA & Problem Solving",
        title: "Sort Names Alphabetically",
        description: "Given a list of names, sort them in alphabetical order.",
        time_limit: 5,
        points: 10,
        difficulty: "Easy",
        base_price: 20,
        exampleInput: '["Johnny", "Virat", "Dhoni"]',
        exampleOutput: '["Dhoni", "Johnny", "Virat"]',
        testCases: [
            { input: '["Johnny", "Virat", "Dhoni"]', expectedOutput: '["Dhoni", "Johnny", "Virat"]' },
            { input: '["Lionel", "Cristiano", "Neymar"]', expectedOutput: '["Cristiano", "Lionel", "Neymar"]' },
            { input: '["Alice", "Bob", "Charlie"]', expectedOutput: '["Alice", "Bob", "Charlie"]' }
        ],
        existingCode: {
            python: `def sort_names(names):\n    return sorted(names)  # Code from here`,
            cpp: `#include <algorithm>\n#include <string>\nstd::vector<std::string> sortNames(std::vector<std::string>& names) {\n    std::sort(names.begin(), names.end());\n    return names;  // Code from here\n}`,
            java: `import java.util.*;\npublic List<String> sortNames(List<String> names) {\n    Collections.sort(names);\n    return names;  // Code from here\n}`,
            javascript: `function sortNames(names) {\n    return names.sort();  // Code from here\n}`,
            c: `void sortNames(char* names[], int n) {\n    qsort(names, n, sizeof(char*), (int (*)(const void*, const void*)) strcmp);  // Code from here\n}`
        }
    },
    //==========================================SQL QUERIES=======================================================
    // SQl Problem 1
    {
        id: "sql1a2b3c4d5e6f7g8",
        category: "SQL",
        title: "Find Top 3 Highest Salaries",
        description: "Write a SQL query to retrieve the top 3 highest salaries from the employees table.",
        time_limit: 5,
        points: 20,
        difficulty: "Medium",
        base_price: 30,
        testCases: [
            { input: "SELECT salary FROM employees ORDER BY salary DESC LIMIT 3", expectedOutput: "[100000, 90000, 80000]" },
            { input: "SELECT salary FROM employees ORDER BY salary DESC LIMIT 2", expectedOutput: "[100000, 90000]" },
            { input: "SELECT salary FROM employees ORDER BY salary DESC LIMIT 1", expectedOutput: "[100000]" }
        ],
        existingCode: {
            sql: `// Query here`
        }
    },
    // SQL Problem 2
    {
        id: "sql9h0i1j2k3l4m5n6",
        category: "SQL",
        title: "Count Employees by Department",
        description: "Write a SQL query to count the number of employees in each department.",
        time_limit: 5,
        points: 25,
        difficulty: "Easy",
        base_price: 25,
        testCases: [
            { input: "SELECT department, COUNT(*) FROM employees GROUP BY department", expectedOutput: "[{ department: 'Sales', count: 10 }, { department: 'Engineering', count: 15 }]" },
            { input: "SELECT department, COUNT(*) FROM employees WHERE department = 'Sales'", expectedOutput: "[{ department: 'Sales', count: 10 }]" }
        ],
        existingCode: {
            sql: `// Query here`
        }
    }
];