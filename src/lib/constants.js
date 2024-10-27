export const ALL_PROBLEMS = [
    // Question 1
    {
        category: "Debugging",
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
            { input: "-5 -5", expectedOutput: "-10" } // Negative case
        ]
    },
    // Question 2
    {
        category: "Debugging",
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
            { input: "", expectedOutput: "10" }, // Repeated to verify stability
            { input: "", expectedOutput: "10" }
        ]
    },
    // Question 3
    {
        category: "Debugging",
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
            { input: "", expectedOutput: "0\n1\n2\n3\n4\n" }, // Recheck for repeatability
            { input: "", expectedOutput: "0\n1\n2\n3\n4\n" }
        ]
    },
    // Question 4
    {
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
            { input: "", expectedOutput: "1,2,3" }, // Consistency check
            { input: "", expectedOutput: "1,2,3" }
        ]
    },
    // Question 7
    {
        category: "Debugging",
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
        category: "Debugging",
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
            { input: "", expectedOutput: "2" }, // Consistency check
            { input: "", expectedOutput: "2" }
        ]
    },
    // Question 9
    {
        category: "Debugging",
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
        category: "Debugging",
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
    {
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
        category: "Debugging",
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
    }
];
