export const ALL_PROBLEMS = [
    // ===============================================DEBUGGING===========================================================
    // Question 1
    {
        "id": "rb45bx7yi80m1dup",
        "category": "Debugging",
        "language": "python",
        "time_limit": 4,
        "points": 20,
        "difficulty": "Easy",
        "base_price": 30,
        "title": "Fix the Arithmetic Operator",
        "description": "The code is supposed to add two numbers, but it’s subtracting instead.",
        "buggedCode": "def add(a, b):\n    return a - b\n\n#Do not change the following code\nif __name__ == '__main__':\n    a, b = map(int, input().split())\n    print(add(a, b))",
        "solutionCode": "def add(a, b):\n    return a + b\n\n#Do not change the following codeif __name__ == '__main__':\n    a, b = map(int, input().split())\n    print(add(a, b))",
        "testCases": [
            { "input": "2 3", "expectedOutput": "5\n" },
            { "input": "10 20", "expectedOutput": "30\n" },
            { "input": "-5 -5", "expectedOutput": "-10\n" }
        ]
    },
    // Question 2
    {
        "id": "if74reyqfu7a8lb2",
        "category": "Debugging",
        "language": "javascript",
        "time_limit": 3,
        "points": 15,
        "difficulty": "Easy",
        "base_price": 25,
        "title": "Correct the Variable Name",
        "description": "A variable is incorrectly named, causing a NameError.",
        "buggedCode": "let x = 10;\nconsole.log(y);",
        "solutionCode": "let x = 10;\nconsole.log(x);",
        "testCases": [
            { "input": "", "expectedOutput": "10\n" },
            { "input": "", "expectedOutput": "10\n" },
            { "input": "", "expectedOutput": "10\n" }
        ]
    },
    // Question 3
    {
        "id": "rxd196y0pd2ktcay",
        "category": "Debugging",
        "language": "cpp",
        "time_limit": 5,
        "points": 25,
        "difficulty": "Easy",
        "base_price": 35,
        "title": "Change the Loop Condition",
        "description": "A while loop runs infinitely due to an incorrect condition.",
        "buggedCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int i = 0;\n    while (i < 5) {\n        cout << i << endl;\n    }\n    return 0;\n}",
        "solutionCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int i = 0;\n    while (i < 5) {\n        cout << i << endl;\n        i++;\n    }\n    return 0;\n}",
        "testCases": [
            { "input": "", "expectedOutput": "0\n1\n2\n3\n4\n" },
            { "input": "", "expectedOutput": "0\n1\n2\n3\n4\n" },
            { "input": "", "expectedOutput": "0\n1\n2\n3\n4\n" }
        ]
    },
    // Question 4
    {
        "id": "hrzuyjpgedgwpcmt",
        "category": "Debugging",
        "language": "python",
        "time_limit": 4,
        "points": 20,
        "difficulty": "Easy",
        "base_price": 30,
        "title": "Debug Array Index Error",
        "description": "Fix the array index to avoid an 'index out of range' error.",
        "buggedCode": "if __name__ == '__main__':\n    arr = list(map(int, input().split()))\n    #Do not change the above code\n    print(arr[3])",
        "solutionCode": "if __name__ == '__main__':\n    arr = list(map(int, input().split()))\n    #Do not change the above code\n    print(arr[2])",
        "testCases": [
            { "input": "21 10 5 14", "expectedOutput": "5\n" },
            { "input": "1 2 3 4", "expectedOutput": "3\n" },
            { "input": "5 6 7 8", "expectedOutput": "7\n" }
        ]
    },
    // Question 5
    {
        "id": "8x61la6yiw3gy4xv",
        "category": "Debugging",
        "language": "python",
        "time_limit": 5,
        "points": 20,
        "difficulty": "Easy",
        "base_price": 30,
        "title": "Adjust Function Return Type",
        "description": "The function returns None instead of a value due to missing return statement.",
        "buggedCode": "def greet(name):\n    print(\"Hello, \" + name)\n\n#Do not change the following code\nif __name__ == '__main__':\n    name = input()\n    print(greet(name))",
        "solutionCode": "def greet(name):\n    return \"Hello, \" + name\n\n#Do not change the following code\nif __name__ == '__main__':\n    name = input()\n    print(greet(name))",
        "testCases": [
            { "input": "Alice", "expectedOutput": "Hello, Alice\n" },
            { "input": "Bob", "expectedOutput": "Hello, Bob\n" },
            { "input": "World", "expectedOutput": "Hello, World\n" }
        ]
    },
    // Question 6
    {
        "id": "iq4w7fdibfqpk0cd",
        "category": "Debugging",
        "language": "javascript",
        "time_limit": 5,
        "points": 25,
        "difficulty": "Easy",
        "base_price": 35,
        "title": "Modify String Concatenation",
        "description": "Fix the string concatenation error where integers are used directly in join.",
        "buggedCode": "const nums = [1, 2, 3];\nconsole.log(nums.join(\",\"));",
        "solutionCode": "const nums = [1, 2, 3];\nconsole.log(nums.map(String).join(\",\"));",
        "testCases": [
            { "input": "", "expectedOutput": "1,2,3\n" },
            { "input": "", "expectedOutput": "1,2,3\n" },
            { "input": "", "expectedOutput": "1,2,3\n" }
        ]
    },
    // Question 7
    {
        "id": "ated6fxdn1s252pu",
        "category": "Debugging",
        "language": "python",
        "time_limit": 5,
        "points": 20,
        "difficulty": "Easy",
        "base_price": 30,
        "title": "Correct the Loop Range",
        "description": "Loop is missing elements due to incorrect range.",
        "buggedCode": "if __name__ == '__main__':\n    n = int(input())\n    #Do not change the above code\n    for i in range(1, n):\n        print(i)",
        "solutionCode": "if __name__ == '__main__':\n    n = int(input())\n    #Do not change the above code\n    for i in range(n):\n        print(i)",
        "testCases": [
            { "input": "10", "expectedOutput": "0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n" },
            { "input": "5", "expectedOutput": "0\n1\n2\n3\n4\n" },
            { "input": "3", "expectedOutput": "0\n1\n2\n" }
        ]
    },
    // Question 8
    {
        "id": "a8ke43c9az2az8h1",
        "category": "Debugging",
        "language": "python",
        "time_limit": 4,
        "points": 20,
        "difficulty": "Easy",
        "base_price": 30,
        "title": "Rectify the Division Operation",
        "description": "The division operation is causing unexpected results (int vs float).",
        "buggedCode": "if __name__ == '__main__':\n    a, b = map(int, input().split())\n    #Do not change the above code\n    result = a / b\n    print(result)",
        "solutionCode": "if __name__ == '__main__':\n    a, b = map(int, input().split())\n    #Do not change the above code\n    result = a // b\n    print(result)",
        "testCases": [
            { "input": "5 2", "expectedOutput": "2\n" },
            { "input": "10 3", "expectedOutput": "3\n" },
            { "input": "9 4", "expectedOutput": "2\n" }
        ]
    },
    // Question 9
    {
        "id": "zg6vzxvr8bun5ezo",
        "category": "Debugging",
        "language": "java",
        "time_limit": 3,
        "points": 15,
        "difficulty": "Easy",
        "base_price": 25,
        "title": "Fix the Boolean Comparison",
        "description": "The code the wrong operator in a boolean comparison.",
        "buggedCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int x = scanner.nextInt();\n        if (x = 5) {\n            System.out.println(\"Yes\");\n        }\n        scanner.close();\n    }\n}",
        "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int x = scanner.nextInt();\n        if (x == 5) {\n            System.out.println(\"Yes\");\n        }\n        scanner.close();\n    }\n}",
        "testCases": [
            { "input": "5", "expectedOutput": "Yes\n" },
            { "input": "10", "expectedOutput": "" },
            { "input": "3", "expectedOutput": "" }
        ]
    },
    // Question 10
    {
        "id": "7rfcnnqnjfo8bhzn",
        "category": "Debugging",
        "language": "javascript",
        "time_limit": 5,
        "points": 25,
        "difficulty": "Easy",
        "base_price": 35,
        "title": "Correct the Function Call Order",
        "description": "Incorrect function call order is causing undefined variables.",
        "buggedCode": "const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nrl.question('', (answer) => {\n//Do not change the above code\n    function foo() {\n        console.log(bar());\n    }\n\n    function bar() {\n        return \"Hello \" + answer;\n    }\n\n    foo();\n//Do not change the below code\n    rl.close();\n});",
        "solutionCode": "const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nrl.question('', (answer) => {\n//Do not change the above code\n    function bar() {\n        return \"Hello \" + answer;\n    }\n\n    function foo() {\n        console.log(bar());\n    }\n\n    foo();\n//Do not change the below code\n    rl.close();\n});",
        "testCases": [
            { "input": "42", "expectedOutput": "Hello 42\n" },
            { "input": "5", "expectedOutput": "Hello 5\n" },
            { "input": "100", "expectedOutput": "Hello 100\n" }
        ]
    },  
    // Question 11
    {
        "id": "jtze2lai7phb7l7c",
        "category": "Debugging",
        "language": "python",
        "time_limit": 6,
        "points": 30,
        "difficulty": "Easy",
        "base_price": 40,
        "title": "Remove Unnecessary Recursion",
        "description": "Recursion is being used unnecessarily, causing performance issues.",
        "buggedCode": "def count(n):\n    if n == 0:\n        return\n    return count(n - 1) + 1\n\n#Do not change the following code\nif __name__ == '__main__':\n    n = int(input())\n    print(count(n))",
        "solutionCode": "def count(n):\n    return n\n\n#Do not change the following code\nif __name__ == '__main__':\n    n = int(input())\n    print(count(n))",
        "testCases": [
            { "input": "5", "expectedOutput": "5\n" },
            { "input": "10", "expectedOutput": "10\n" },
            { "input": "1", "expectedOutput": "1\n" }
        ]
    },
    // Question 12
    {
        "id": "elny4xy1qs5l8gtr",
        "category": "Debugging",
        "language": "python",
        "time_limit": 6,
        "points": 30,
        "difficulty": "Easy",
        "base_price": 40,
        "title": "Replace The Argument",
        "description": "An argument is causing unexpected behavior.",
        "buggedCode": "def add_item(item, items):\n    items.append(item)\n    return items\n\n#Do not change the following code\nif __name__ == '__main__':\n    item = int(input())\n    print(add_item(item))",
        "solutionCode": "def add_item(item, items=[]):\n    items.append(item)\n    return items\n\n#Do not change the following code\nif __name__ == '__main__':\n    item = int(input())\n    print(add_item(item))",
        "testCases": [
            { "input": "1", "expectedOutput": "[1]\n" },
            { "input": "2", "expectedOutput": "[2]\n" },
            { "input": "3", "expectedOutput": "[3]\n" }
        ]
    },
    // Question 13
    {
        "id": "fd5h1oevamrlrmpa",
        "category": "Debugging",
        "language": "python",
        "time_limit": 5,
        "points": 25,
        "difficulty": "Easy",
        "base_price": 35,
        "title": "Adjust the String Split Logic",
        "description": "A split function isn’t working as expected on multiple delimiters.",
        "buggedCode": "sentence = input()\nwords = sentence.split(\",\")\n\n#Do not change the following code\nif __name__ == '__main__':\n    print(words)",
        "solutionCode": "sentence = input()\nwords = sentence.split(\", \")\n\n#Do not change the following code\nif __name__ == '__main__':\n    print(words)",
        "testCases": [
            { "input": "Hello, world!", "expectedOutput": "['Hello', 'world!']\n" },
            { "input": "Python, programming", "expectedOutput": "['Python', 'programming']\n" },
            { "input": "Debugging, issue", "expectedOutput": "['Debugging', 'issue']\n" }
        ]
    },
    // Question 14
    {
        "id": "1garqic4fj64elwg",
        "category": "Debugging",
        "language": "java",
        "time_limit": 6,
        "points": 30,
        "difficulty": "Easy",
        "base_price": 40,
        "title": "Fix Logic in Nested Loops",
        "description": "Nested loops are leading to incorrect output due to misplaced conditionals.",
        "buggedCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for(int i = 0; i < n; i++) {\n            for(int j = i; j < n; j++) {\n                if(i == j) {\n                    break;\n                }\n                System.out.println(i + \",\" + i);\n            }\n        }\n        scanner.close();\n    }\n}",
        "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (i == j) {\n                    continue;\n                }\n                System.out.println(i + \",\" + j);\n            }\n        }\n        scanner.close();\n    }\n}",
        "testCases": [
            { "input": "3", "expectedOutput": "0,1\n0,2\n1,0\n1,2\n2,0\n2,1\n" },
            { "input": "4", "expectedOutput": "0,1\n0,2\n0,3\n1,0\n1,2\n1,3\n2,0\n2,1\n2,3\n3,0\n3,1\n3,2\n" },
            { "input": "5", "expectedOutput": "0,1\n0,2\n0,3\n0,4\n1,0\n1,2\n1,3\n1,4\n2,0\n2,1\n2,3\n2,4\n3,0\n3,1\n3,2\n3,4\n4,0\n4,1\n4,2\n4,3\n" }
        ]
    },
    // Question 15
    {
        "id": "fvuxtgdn1tem6v5u",
        "category": "Debugging",
        "language": "C",
        "time_limit": 6,
        "points": 35,
        "difficulty": "Easy",
        "base_price": 45,
        "title": "Resolve Infinite Recursion",
        "description": "Recursive function doesn’t have a base case, leading to infinite recursion.",
        "buggedCode": "#include <stdio.h>\n\nint recurse(int n){\n    return recurse(n - 1);\n}\n\n//Do not change the following code\nint main(){\n    int n;\n    scanf(\"%d\", &n);\n    printf(\"%d\\n\", recurse(n));\n    return 0;\n}",
        "solutionCode": "#include <stdio.h>\n\nint recurse(int n){\n    if (n <= 0) return n;\n    return recurse(n - 1);\n}\n\n//Do not change the following code\nint main(){\n    int n;\n    scanf(\"%d\", &n);\n    printf(\"%d\\n\", recurse(n));\n    return 0;\n}",
        "testCases": [
            { "input": "5", "expectedOutput": "0\n" },
            { "input": "10", "expectedOutput": "0\n" },
            { "input": "1", "expectedOutput": "0\n" }
        ]
    },
    // Question 16
    {
        "id": "c2722b57b31hbvbl",
        "category": "Debugging",
        "language": "python",
        "time_limit": 4,
        "points": 20,
        "difficulty": "Easy",
        "base_price": 30,
        "title": "Correct the Case Sensitivity Issue",
        "description": "Code comparison fails because it doesn’t account for case sensitivity.",
        "buggedCode": "word = input()\nif word == \"hello\":\n    print(\"Match\")\n",
        "solutionCode": "word = input()\nif word.lower() == \"hello\":\n    print(\"Match\")\n",
        "testCases": [
            { "input": "Hello", "expectedOutput": "Match\n" },
            { "input": "HELLO", "expectedOutput": "Match\n" },
            { "input": "hElLo", "expectedOutput": "Match\n" }
        ]
    },
    // Question 17
    {
        "id": "5dunnrmk0ocojwi7",
        "category": "Debugging",
        "language": "javascript",
        "time_limit": 5,
        "points": 25,
        "difficulty": "Easy",
        "base_price": 35,
        "title": "Fix Floating Point Precision Issue",
        "description": "A calculation is off due to floating-point precision issues.",
        "buggedCode": "const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });\nreadline.question('', a => {\n    readline.question('', b => {\n        let result = parseFloat(a) + parseFloat(b);\n        console.log(result);\n        readline.close();\n    });\n});",
        "solutionCode": "const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });\nreadline.question('', a => {\n    readline.question('', b => {\n        let result = (parseFloat(a) + parseFloat(b)).toFixed(1);\n        console.log(result);\n        readline.close();\n    });\n});",
        "testCases": [
            { "input": "0.1\n0.2", "expectedOutput": "0.3\n" },
            { "input": "0.3\n0.6", "expectedOutput": "0.9\n" },
            { "input": "0.25\n0.15", "expectedOutput": "0.4\n" }
        ]
    },
    // Question 18
    {
        "id": "2dd4kqbpvvhe3ygp",
        "category": "Debugging",
        "language": "python",
        "time_limit": 4,
        "points": 20,
        "difficulty": "Easy",
        "base_price": 30,
        "title": "Adjust Incorrect List Initialization",
        "description": "A list is initialized incorrectly, causing unexpected results.",
        "buggedCode": "n = int(input())\nlst = [0] * n\nlst[0] = 10\nprint(lst)\n",
        "solutionCode": "n = int(input())\nlst = [0 for _ in range(n)]\nlst[0] = 10\nprint(lst)\n",
        "testCases": [
            { "input": "5", "expectedOutput": "[10, 0, 0, 0, 0]\n" },
            { "input": "3", "expectedOutput": "[10, 0, 0]\n" },
            { "input": "4", "expectedOutput": "[10, 0, 0, 0]\n" }
        ]
    },
    // Question 19
    {
        "id": "6wze97y89lpbpcwt",
        "category": "Debugging",
        "language": "javascript",
        "time_limit": 4,
        "points": 20,
        "difficulty": "Easy",
        "base_price": 30,
        "title": "Modify the Dictionary Key Access",
        "description": "A dictionary key is accessed incorrectly, causing a KeyError.",
        "buggedCode": "const data = { name: \"Alice\" };\nconsole.log(data[\"age\"]);\n",
        "solutionCode": "const data = { name: \"Alice\" };\nconsole.log(data[\"name\"]);\n",
        "testCases": [
            { "input": "", "expectedOutput": "Alice\n" },
            { "input": "", "expectedOutput": "Alice\n" },
            { "input": "", "expectedOutput": "Alice\n" }
        ]
    },
    // Question 20
    {
        "id": "smwmdjodgbnfpmhr",
        "category": "Debugging",
        "language": "java",
        "time_limit": 3,
        "points": 15,
        "difficulty": "Easy",
        "base_price": 25,
        "title": "Fix the Type Casting Issue",
        "description": "Type casting is not handled properly, causing a TypeError.",
        "buggedCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String age = scanner.next();\n        int total = 5 + age;\n        System.out.println(total);\n        scanner.close();\n    }\n}",
        "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String age = scanner.next();\n        int total = 5 + Integer.parseInt(age);\n        System.out.println(total);\n        scanner.close();\n    }\n}",
        "testCases": [
            { "input": "25", "expectedOutput": "30\n" },
            { "input": "10", "expectedOutput": "15\n" },
            { "input": "20", "expectedOutput": "25\n" }
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
            print(data.get("gender", "Alice"))
        `,
        testCases: [
            { input: "", expectedOutput: "Alice" },
            { input: "", expectedOutput: "Alice" },
            { input: "", expectedOutput: "Alice" }
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
    // Problem 1
    {
        id: "SQ1-9FJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 20,
        points: 10,
        time_limit: 2,
        title: "Retrieve all records",
        description: "Retrieve all records from the employees table.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT * FROM employees;", expectedRowCount: 10 },
        ]
    },
    // Problem 2
    {
        id: "SQ2-HSF9L3SKJL0P",
        category: "SQL",
        difficulty: "Easy",
        base_price: 20,
        points: 10,
        time_limit: 2,
        title: "Select Name Column",
        description: "Select only the name column from the employees table.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT name FROM employees;", expectedColumns: ["name"] },
        ]
    },
    // Problem 3
    {
        id: "SQ3-KLS9FJSKDLW2",
        category: "SQL",
        difficulty: "Easy",
        base_price: 25,
        points: 12,
        time_limit: 2,
        title: "Count Employees",
        description: "Find the total number of employees in the employees table.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT COUNT(*) FROM employees;", expectedOutput: "10" },
        ]
    },
    // Problem 4
    {
        id: "SQ4-MX9DLSJFK3WL",
        category: "SQL",
        difficulty: "Easy",
        base_price: 25,
        points: 12,
        time_limit: 2,
        title: "Distinct Departments",
        description: "Get all distinct values in the department column from employees.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT DISTINCT department FROM employees;", expectedValues: ["Sales", "Engineering", "HR", "Marketing"] },
        ]
    },
    // Problem 5
    {
        id: "SQ5-J2NLS8DFJWLM",
        category: "SQL",
        difficulty: "Easy",
        base_price: 30,
        points: 15,
        time_limit: 3,
        title: "Salary Above 50000",
        description: "Retrieve all employees whose salary is greater than 50000.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT * FROM employees WHERE salary > 50000;", expectedRowCount: 6 },
        ]
    },
    // Problem 6
    {
        id: "SQ6-XW8FJSK7DKLN",
        category: "SQL",
        difficulty: "Easy",
        base_price: 30,
        points: 15,
        time_limit: 3,
        title: "Count by Department",
        description: "Count the number of employees in each department.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT department, COUNT(*) FROM employees GROUP BY department;", expectedOutput: [
                { department: "Sales", count: 3 },
                { department: "Engineering", count: 3 },
                { department: "HR", count: 2 },
                { department: "Marketing", count: 2 }
            ] }
        ]
    },
    // Problem 7
    {
        id: "SQ7-W9DSL3K8FNLP",
        category: "SQL",
        difficulty: "Easy",
        base_price: 30,
        points: 15,
        time_limit: 3,
        title: "Minimum Salary",
        description: "Find the minimum salary from the employees table.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT MIN(salary) FROM employees;", expectedOutput: "45000.00" },
        ]
    },
    // Problem 8
    {
        id: "SQ8-NFJLS0DK9S3W",
        category: "SQL",
        difficulty: "Easy",
        base_price: 35,
        points: 17,
        time_limit: 3,
        title: "Names Starting with 'A'",
        description: "Retrieve all employee names where the name starts with 'A'.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT name FROM employees WHERE name LIKE 'A%';", expectedOutput: ["Alice Johnson"] },
        ]
    },
    // Problem 9
    {
        id: "SQ9-XJ3KFL2KDJ9S",
        category: "SQL",
        difficulty: "Easy",
        base_price: 35,
        points: 17,
        time_limit: 3,
        title: "Average Salary",
        description: "Calculate the average salary of employees.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT AVG(salary) FROM employees;", expectedOutput: "58300.00" },
        ]
    },
    // Problem 10
    {
        id: "SQ10-MKS8L3SKD9WL",
        category: "SQL",
        difficulty: "Easy",
        base_price: 35,
        points: 17,
        time_limit: 3,
        title: "Sales Department Employees",
        description: "Select all employees who work in the Sales department.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT * FROM employees WHERE department = 'Sales';", expectedRowCount: 3 },
        ]
    },
    // Question 11
    {
        id: "SQ11-JS9KDLSFJ0KL",
        category: "SQL",
        difficulty: "Easy",
        base_price: 40,
        points: 20,
        time_limit: 4,
        title: "Total Salary by Department",
        description: "Calculate the total salary expense per department.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT department, SUM(salary) FROM employees GROUP BY department;", expectedOutput: [
                { department: "Sales", sum_salary: 168000 },
                { department: "Engineering", sum_salary: 195000 },
                { department: "HR", sum_salary: 97000 },
                { department: "Marketing", sum_salary: 114000 }
            ] }
        ]
    },
    // Question 12
    {
        id: "SQ12-KLSJD09F3S0P",
        category: "SQL",
        difficulty: "Easy",
        base_price: 40,
        points: 20,
        time_limit: 4,
        title: "Employees with Age over 30",
        description: "Retrieve the names of employees who are over 30 years old.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT name FROM employees WHERE age > 30;", expectedOutput: ["Alice Johnson", "Charlie Brown", "Edward Davis", "George Harris", "Ivan Young", "Julia Thomas"] }
        ]
    },
    // Question 13
    {
        id: "SQ13-FL0S3KJD9SW0",
        category: "SQL",
        difficulty: "Easy",
        base_price: 45,
        points: 22,
        time_limit: 4,
        title: "Top 3 Highest Salaries",
        description: "Find the names and salaries of the top 3 highest-paid employees.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT name, salary FROM employees ORDER BY salary DESC LIMIT 3;", expectedOutput: [
                { name: "Ivan Young", salary: 80000 },
                { name: "Julia Thomas", salary: 65000 },
                { name: "George Harris", salary: 62000 }
            ] }
        ]
    },
    // Question 14
    {
        id: "SQ14-JD0S3LFKS9P4",
        category: "SQL",
        difficulty: "Easy",
        base_price: 45,
        points: 22,
        time_limit: 4,
        title: "Hire Date Before 2018",
        description: "List all employees hired before the year 2018.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT name, hire_date FROM employees WHERE hire_date < '2018-01-01';", expectedOutput: [
                { name: "Charlie Brown", hire_date: "2015-09-15" },
                { name: "George Harris", hire_date: "2016-01-25" },
                { name: "Julia Thomas", hire_date: "2014-08-01" }
            ] }
        ]
    },
    // Question 15
    {
        id: "SQ15-LKJSD0F9S4MP",
        category: "SQL",
        difficulty: "Easy",
        base_price: 50,
        points: 25,
        time_limit: 5,
        title: "Average Salary by Job Title",
        description: "Calculate the average salary for each job title.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT job_title, AVG(salary) FROM employees GROUP BY job_title;", expectedOutput: [
                { job_title: "Sales Associate", avg_salary: 51500.00 },
                { job_title: "Software Engineer", avg_salary: 70000.00 },
                { job_title: "HR Specialist", avg_salary: 50000.00 },
                { job_title: "Marketing Manager", avg_salary: 62000.00 },
                { job_title: "Sales Manager", avg_salary: 65000.00 },
                { job_title: "Senior Engineer", avg_salary: 80000.00 }
            ] }
        ]
    },
    // Question 16
    {
        id: "SQ16-ML09SJDF3P0L",
        category: "SQL",
        difficulty: "Easy",
        base_price: 50,
        points: 25,
        time_limit: 5,
        title: "Employee and Manager Names",
        description: "List each employee's name along with their manager's name.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT e.name AS employee_name, m.name AS manager_name FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;", expectedOutput: [
                { employee_name: "Bob Smith", manager_name: "Alice Johnson" },
                { employee_name: "Daisy Carter", manager_name: "Charlie Brown" },
                { employee_name: "Fiona Green", manager_name: "Edward Davis" },
                { employee_name: "Hannah Lee", manager_name: "George Harris" },
                { employee_name: "Alice Johnson", manager_name: null }
            ] }
        ]
    },
    // Question 17
    {
        id: "SQ17-KS9LFJ3SLD0P",
        category: "SQL",
        difficulty: "Easy",
        base_price: 55,
        points: 27,
        time_limit: 5,
        title: "Number of Managers",
        description: "Count the number of employees who are managers.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT COUNT(DISTINCT manager_id) FROM employees WHERE manager_id IS NOT NULL;", expectedOutput: "5" }
        ]
    },
    // Question 18
    {
        id: "SQ18-L0SJD9FK3S8M",
        category: "SQL",
        difficulty: "Easy",
        base_price: 55,
        points: 27,
        time_limit: 5,
        title: "Employees with High Experience",
        description: "List names of employees with more than 5 years of experience.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT name FROM employees WHERE years_experience > 5;", expectedOutput: ["Alice Johnson", "Charlie Brown", "George Harris", "Ivan Young", "Julia Thomas"] }
        ]
    },
    // Question 19
    {
        id: "SQ19-M0SKJDF3LS8W",
        category: "SQL",
        difficulty: "Easy",
        base_price: 60,
        points: 30,
        time_limit: 6,
        title: "Employees Hired in 2021",
        description: "Retrieve names of employees hired in the year 2021.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT name FROM employees WHERE YEAR(hire_date) = 2021;", expectedOutput: ["Hannah Lee", "Fiona Green"] }
        ]
    },
    // Question 20
    {
        id: "SQ20-N9SDJFKLS0L3",
        category: "SQL",
        difficulty: "Easy",
        base_price: 60,
        points: 30,
        time_limit: 6,
        title: "Employees Without Manager",
        description: "List all employees who do not have a manager.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT name FROM employees WHERE manager_id IS NULL;", expectedOutput: ["Alice Johnson", "Charlie Brown", "Edward Davis", "George Harris", "Ivan Young", "Julia Thomas"] }
        ]
    },
    // Question 21
    {
        id: "SQ21-0FLSKDJ93SKL",
        category: "SQL",
        difficulty: "Medium",
        base_price: 70,
        points: 35,
        time_limit: 7,
        title: "Employees by Department and Count",
        description: "List each department with the number of employees in it.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT department, COUNT(*) as employee_count FROM employees GROUP BY department;", expectedOutput: [
                { department: "Sales", employee_count: 3 },
                { department: "Engineering", employee_count: 3 },
                { department: "HR", employee_count: 2 },
                { department: "Marketing", employee_count: 2 }
            ] }
        ]
    },
    // Question 22
    {
        id: "SQ22-KLJ0S9DJF4LP",
        category: "SQL",
        difficulty: "Medium",
        base_price: 70,
        points: 35,
        time_limit: 7,
        title: "Top Paid in Each Department",
        description: "Find the highest-paid employee in each department.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT department, MAX(salary) as top_salary FROM employees GROUP BY department;", expectedOutput: [
                { department: "Sales", top_salary: 65000 },
                { department: "Engineering", top_salary: 80000 },
                { department: "HR", top_salary: 50000 },
                { department: "Marketing", top_salary: 62000 }
            ] }
        ]
    },
    // Question 23
    {
        id: "SQ23-MKLSDJF90P2L",
        category: "SQL",
        difficulty: "Medium",
        base_price: 75,
        points: 38,
        time_limit: 8,
        title: "Average Experience by Job Title",
        description: "Calculate the average years of experience for each job title.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT job_title, AVG(years_experience) as avg_experience FROM employees GROUP BY job_title;", expectedOutput: [
                { job_title: "Sales Associate", avg_experience: 4 },
                { job_title: "Software Engineer", avg_experience: 7 },
                { job_title: "HR Specialist", avg_experience: 6 },
                { job_title: "Marketing Manager", avg_experience: 5 },
                { job_title: "Sales Manager", avg_experience: 8 },
                { job_title: "Senior Engineer", avg_experience: 10 }
            ] }
        ]
    },
    // Question 24
    {
        id: "SQ24-JKL0FJ92S9L",
        category: "SQL",
        difficulty: "Medium",
        base_price: 75,
        points: 38,
        time_limit: 8,
        title: "Employees with No Department",
        description: "List all employees who do not belong to any department.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT name FROM employees WHERE department IS NULL;", expectedOutput: [] } // Assuming no null values
        ]
    },
    // Question 25
    {
        id: "SQ25-LD9FJ0SK3ML",
        category: "SQL",
        difficulty: "Medium",
        base_price: 80,
        points: 40,
        time_limit: 8,
        title: "Average Salary over 5 Years Experience",
        description: "Calculate the average salary of employees with more than 5 years of experience.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT AVG(salary) FROM employees WHERE years_experience > 5;", expectedOutput: "61000.00" }
        ]
    },
    // Question 26
    {
        id: "SQ26-LKJFS0D9P4ML",
        category: "SQL",
        difficulty: "Medium",
        base_price: 80,
        points: 40,
        time_limit: 8,
        title: "Employees and Their Managers",
        description: "List all employees with their managers’ names (null if no manager).",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT e.name AS employee_name, m.name AS manager_name FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;", expectedOutput: [
                { employee_name: "Bob Smith", manager_name: "Alice Johnson" },
                { employee_name: "Daisy Carter", manager_name: "Charlie Brown" },
                { employee_name: "Fiona Green", manager_name: "Edward Davis" },
                { employee_name: "Hannah Lee", manager_name: "George Harris" }
            ] }
        ]
    },
    // Question 27
    {
        id: "SQ27-KSJD09F3ML2P",
        category: "SQL",
        difficulty: "Medium",
        base_price: 85,
        points: 42,
        time_limit: 9,
        title: "Departments with Salary Over 60K",
        description: "Find departments where at least one employee earns over 60,000.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT DISTINCT department FROM employees WHERE salary > 60000;", expectedOutput: ["Engineering", "Sales", "Marketing"] }
        ]
    },
    // Question 28
    {
        id: "SQ28-M3LKD9J0SP0L",
        category: "SQL",
        difficulty: "Medium",
        base_price: 85,
        points: 42,
        time_limit: 9,
        title: "Unique Job Titles",
        description: "List all unique job titles within the company.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT DISTINCT job_title FROM employees;", expectedOutput: ["Sales Associate", "Software Engineer", "HR Specialist", "Marketing Manager", "Sales Manager", "Senior Engineer"] }
        ]
    },
    // Question 29
    {
        id: "SQ29-JS0L3KD9PML2",
        category: "SQL",
        difficulty: "Medium",
        base_price: 90,
        points: 45,
        time_limit: 10,
        title: "Employee Ages in Descending Order",
        description: "Display all employee names with their ages, sorted by age in descending order.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT name, age FROM employees ORDER BY age DESC;", expectedOutput: [
                { name: "Julia Thomas", age: 45 },
                { name: "Ivan Young", age: 42 },
                { name: "George Harris", age: 39 },
                { name: "Charlie Brown", age: 35 }
            ] }
        ]
    },
    // Question 30
    {
        id: "SQ30-0LKJFS9DMLP3",
        category: "SQL",
        difficulty: "Medium",
        base_price: 90,
        points: 45,
        time_limit: 10,
        title: "Employee Count by Job Title",
        description: "Get a count of employees for each job title.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT job_title, COUNT(*) as count FROM employees GROUP BY job_title;", expectedOutput: [
                { job_title: "Sales Associate", count: 3 },
                { job_title: "Software Engineer", count: 3 },
                { job_title: "HR Specialist", count: 2 },
                { job_title: "Marketing Manager", count: 2 }
            ] }
        ]
    },
    // Question 31
    {
        id: "SQ31-AJDS09KSJ4LP",
        category: "SQL",
        difficulty: "Hard",
        base_price: 100,
        points: 50,
        time_limit: 12,
        title: "Find Employees Without Projects",
        description: "List all employees who are not assigned to any project.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT name FROM employees WHERE id NOT IN (SELECT employee_id FROM projects);", expectedOutput: ["George Harris", "Daisy Carter", "Ivan Young"] }
        ]
    },
    // Question 32
    {
        id: "SQ32-KSDLJ0DFL4P9",
        category: "SQL",
        difficulty: "Hard",
        base_price: 105,
        points: 52,
        time_limit: 13,
        title: "Total Salary by Job Title",
        description: "Calculate the total salary for each job title.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT job_title, SUM(salary) as total_salary FROM employees GROUP BY job_title;", expectedOutput: [
                { job_title: "Sales Associate", total_salary: 180000 },
                { job_title: "Software Engineer", total_salary: 240000 },
                { job_title: "HR Specialist", total_salary: 95000 }
            ] }
        ]
    },
    // Question 33
    {
        id: "SQ33-LSDJFS0K9P4L",
        category: "SQL",
        difficulty: "Hard",
        base_price: 110,
        points: 55,
        time_limit: 13,
        title: "List Employees in Multiple Departments",
        description: "Find employees who work in more than one department.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT name FROM employees GROUP BY name HAVING COUNT(DISTINCT department) > 1;", expectedOutput: ["Julia Thomas"] }
        ]
    },
    // Question 34
    {
        id: "SQ34-KDFJS0L9PML2",
        category: "SQL",
        difficulty: "Hard",
        base_price: 110,
        points: 55,
        time_limit: 14,
        title: "Top Earners by Department",
        description: "Identify the highest salary earners in each department.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT department, name, MAX(salary) as salary FROM employees GROUP BY department, name ORDER BY salary DESC;", expectedOutput: [
                { department: "Sales", name: "Alice Johnson", salary: 65000 },
                { department: "Engineering", name: "Charlie Brown", salary: 80000 }
            ] }
        ]
    },
    // Question 35
    {
        id: "SQ35-MSKDJF09S4LP",
        category: "SQL",
        difficulty: "Hard",
        base_price: 115,
        points: 57,
        time_limit: 14,
        title: "Find All Managers and Their Employees",
        description: "List all managers along with the names of their direct reports.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT m.name AS manager_name, e.name AS employee_name FROM employees e LEFT JOIN employees m ON e.manager_id = m.id WHERE m.name IS NOT NULL;", expectedOutput: [
                { manager_name: "Alice Johnson", employee_name: "Bob Smith" },
                { manager_name: "Edward Davis", employee_name: "Fiona Green" }
            ] }
        ]
    },
    // Question 36
    {
        id: "SQ36-KLSJD09FPL2",
        category: "SQL",
        difficulty: "Hard",
        base_price: 120,
        points: 60,
        time_limit: 15,
        title: "Department Budget Allocation",
        description: "Calculate the total budget required to cover all salaries by department.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT department, SUM(salary) as total_salary FROM employees GROUP BY department;", expectedOutput: [
                { department: "Sales", total_salary: 130000 },
                { department: "Engineering", total_salary: 180000 },
                { department: "HR", total_salary: 100000 }
            ] }
        ]
    },
    // Question 37
    {
        id: "SQ37-ALSKDJF09ML2",
        category: "SQL",
        difficulty: "Hard",
        base_price: 125,
        points: 62,
        time_limit: 15,
        title: "Rank Employees by Salary in Each Department",
        description: "Rank employees in each department by salary.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT name, department, salary, RANK() OVER (PARTITION BY department ORDER BY salary DESC) as salary_rank FROM employees;", expectedOutput: [
                { name: "Alice Johnson", department: "Sales", salary: 65000, salary_rank: 1 },
                { name: "Daisy Carter", department: "Sales", salary: 45000, salary_rank: 2 },
                { name: "Charlie Brown", department: "Engineering", salary: 80000, salary_rank: 1 }
            ] }
        ]
    },
    // Question 38
    {
        id: "SQ38-LKJFD09SPL4",
        category: "SQL",
        difficulty: "Hard",
        base_price: 130,
        points: 65,
        time_limit: 16,
        title: "Cumulative Salary Sum by Department",
        description: "Calculate the cumulative sum of salaries in each department.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT name, department, salary, SUM(salary) OVER (PARTITION BY department ORDER BY salary) as cumulative_salary FROM employees;", expectedOutput: [
                { name: "Daisy Carter", department: "Sales", salary: 45000, cumulative_salary: 45000 },
                { name: "Alice Johnson", department: "Sales", salary: 65000, cumulative_salary: 110000 }
            ] }
        ]
    },
    // Question 39
    {
        id: "SQ39-KJSDF09L4PM",
        category: "SQL",
        difficulty: "Hard",
        base_price: 130,
        points: 65,
        time_limit: 16,
        title: "Employees with Above Average Salary",
        description: "List employees whose salary is above the company average.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT name FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);", expectedOutput: ["Alice Johnson", "Charlie Brown", "Edward Davis"] }
        ]
    },
    // Question 40
    {
        id: "SQ40-ALKJDF0SL9P",
        category: "SQL",
        difficulty: "Hard",
        base_price: 135,
        points: 67,
        time_limit: 17,
        title: "Employee Tenure and Salary Correlation",
        description: "Analyze the correlation between tenure and salary among employees.",
        existingCode: "// Query here",
        testCases: [
            { query: "SELECT years_experience, salary FROM employees ORDER BY years_experience;", expectedOutput: [
                { years_experience: 1, salary: 35000 },
                { years_experience: 3, salary: 45000 },
                { years_experience: 8, salary: 65000 }
            ] }
        ]
    },
    // ===================================== WEB PROGRAMMING ========================================================
    // Question 1
    {
        id: "wprb1as8dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 10,
        base_price: 20,
        time_limit: 5,
        title: "Create a basic HTML structure",
        description: "Write HTML code to create a page with an <h1> heading that says 'Welcome!' and a paragraph below it that says 'This is my first webpage.'",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Basic HTML Structure</title>
                </head>
                <body>
                    <!-- Your code here -->
                </body>
                </html>
            `,
            css: `
                /* No additional styles needed */
            `,
            js: `
                // No JavaScript required for this task
            `
        },
        testCases: [
            { description: "Page contains an <h1> tag with 'Welcome!'", expectedOutput: true },
            { description: "Page contains a <p> tag with 'This is my first webpage.'", expectedOutput: true }
        ]
    },
    // Question 2
    {
        id: "wprb2as8dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 15,
        base_price: 25,
        time_limit: 7,
        title: "Style a Button",
        description: "Write CSS to make the button have rounded corners and change its background color when hovered.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Styled Button</title>
                    <link rel="stylesheet" href="styles.css">
                </head>
                <body>
                    <button id="styledButton">Click Me</button>
                </body>
                </html>
            `,
            css: `
                #styledButton {
                    /* Add styles here */
                }
            `,
            js: `
                // No JavaScript required for this task
            `
        },
        testCases: [
            { description: "Button has rounded corners", expectedOutput: true },
            { description: "Button background color changes on hover", expectedOutput: true }
        ]
    },
    // Question 3
    {
        id: "wprb3as8dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 15,
        base_price: 25,
        time_limit: 5,
        title: "JavaScript Alert on Click",
        description: "Write JavaScript to display an alert with the message 'Button Clicked!' when the button is clicked.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Alert Button</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <button id="alertButton">Click Me</button>
                </body>
                </html>
            `,
            css: `
                /* No additional styles needed */
            `,
            js: `
                document.getElementById("alertButton").addEventListener("click", function() {
                    // Add alert code here
                });
            `
        },
        testCases: [
            { description: "Alert displays 'Button Clicked!' when button is clicked", expectedOutput: true }
        ]
    },
    // Question 4
    {
        id: "wprb4as8dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 15,
        base_price: 25,
        time_limit: 6,
        title: "Create a Horizontal List",
        description: "Use CSS to style the list items horizontally in a row.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Horizontal List</title>
                    <link rel="stylesheet" href="styles.css">
                </head>
                <body>
                    <ul id="horizontalList">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </body>
                </html>
            `,
            css: `
                #horizontalList {
                    /* Add CSS to display list items in a row */
                }
            `,
            js: `
                // No JavaScript required for this task
            `
        },
        testCases: [
            { description: "List items are displayed in a row", expectedOutput: true }
        ]
    },
    // Question 5
    {
        id: "wprb5as8dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 20,
        base_price: 30,
        time_limit: 8,
        title: "Sum Two Numbers",
        description: "Write JavaScript to add two numbers from input fields and display the sum in a <div> element.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Sum Calculator</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <input type="number" id="num1" placeholder="Enter first number">
                    <input type="number" id="num2" placeholder="Enter second number">
                    <button id="calculateSum">Calculate Sum</button>
                    <div id="result"></div>
                </body>
                </html>
            `,
            css: `
                /* Optional styling for inputs and result div */
            `,
            js: `
                document.getElementById("calculateSum").addEventListener("click", function() {
                    // Add code to calculate and display the sum
                });
            `
        },
        testCases: [
            { description: "Calculates sum of 3 and 5 as 8", expectedOutput: 8 },
            { description: "Calculates sum of -5 and 10 as 5", expectedOutput: 5 }
        ]
    },
    // Question 6
    {
        id: "wprb6as8dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 20,
        base_price: 30,
        time_limit: 7,
        title: "Change Text Color on Hover",
        description: "Write CSS to change the color of a paragraph's text when hovered.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Hover Text Color</title>
                    <link rel="stylesheet" href="styles.css">
                </head>
                <body>
                    <p id="hoverText">Hover over this text to change its color.</p>
                </body>
                </html>
            `,
            css: `
                #hoverText {
                    /* Add CSS to change text color on hover */
                }
            `,
            js: `
                // No JavaScript required for this task
            `
        },
        testCases: [
            { description: "Text color changes on hover", expectedOutput: true }
        ]
    },
    // Question 7
    {
        id: "wprb7as8dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 20,
        base_price: 30,
        time_limit: 10,
        title: "Display Alert with Input Value",
        description: "Write JavaScript to display an alert with the value entered in an input field when the button is clicked.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Alert with Input Value</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <input type="text" id="userInput" placeholder="Enter some text">
                    <button id="showAlert">Show Alert</button>
                </body>
                </html>
            `,
            css: `
                /* Optional styling for input and button */
            `,
            js: `
                document.getElementById("showAlert").addEventListener("click", function() {
                    // Add code to display alert with input value
                });
            `
        },
        testCases: [
            { description: "Displays alert with entered text 'Hello'", expectedOutput: "Hello" },
            { description: "Displays alert with entered text 'World'", expectedOutput: "World" }
        ]
    },
    // Question 8
    {
        id: "wprb8as8dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 25,
        base_price: 35,
        time_limit: 10,
        title: "Toggle Paragraph Visibility",
        description: "Write JavaScript to toggle the visibility of a paragraph when a button is clicked.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Toggle Visibility</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <button id="toggleButton">Toggle Paragraph</button>
                    <p id="toggleText">This text will be shown or hidden when the button is clicked.</p>
                </body>
                </html>
            `,
            css: `
                /* Optional styling for button and paragraph */
            `,
            js: `
                document.getElementById("toggleButton").addEventListener("click", function() {
                    // Add code to toggle visibility of paragraph
                });
            `
        },
        testCases: [
            { description: "Paragraph is visible after one button click", expectedOutput: true },
            { description: "Paragraph is hidden after two button clicks", expectedOutput: false }
        ]
    },
    // Question 9
    {
        id: "wprb9as8dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 25,
        base_price: 35,
        time_limit: 8,
        title: "Add Item to List",
        description: "Write JavaScript to add an item to a list when a button is clicked.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Add to List</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <ul id="itemList">
                        <li>Item 1</li>
                        <li>Item 2</li>
                    </ul>
                    <button id="addItemButton">Add Item</button>
                </body>
                </html>
            `,
            css: `
                /* Optional styling for list and button */
            `,
            js: `
                document.getElementById("addItemButton").addEventListener("click", function() {
                    // Add code to append new item to list
                });
            `
        },
        testCases: [
            { description: "Adds a new item to the list on button click", expectedOutput: true }
        ]
    },
    // Question 10
    {
        id: "wprb10as8dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 25,
        base_price: 35,
        time_limit: 8,
        title: "Change Background Color",
        description: "Write JavaScript to change the background color of the body when a button is clicked.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Change Background</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <button id="changeColorButton">Change Background Color</button>
                </body>
                </html>
            `,
            css: `
                /* Optional styling for button */
            `,
            js: `
                document.getElementById("changeColorButton").addEventListener("click", function() {
                    // Add code to change background color
                });
            `
        },
        testCases: [
            { description: "Background color changes on button click", expectedOutput: true }
        ]
    },
    // Question 11
    {
        id: "wprb11zx9dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 30,
        base_price: 40,
        time_limit: 10,
        title: "Hide Element on Button Click",
        description: "Write JavaScript to hide a specific element when a button is clicked.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Hide Element</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <button id="hideButton">Hide Text</button>
                    <p id="textToHide">This text will disappear on button click.</p>
                </body>
                </html>
            `,
            css: `
                /* Optional styling for button and text */
            `,
            js: `
                document.getElementById("hideButton").addEventListener("click", function() {
                    // Add code to hide the paragraph with id 'textToHide'
                });
            `
        },
        testCases: [
            { description: "Paragraph is hidden on button click", expectedOutput: true }
        ]
    },
    // Question 12
    {
        id: "wprb12zx9dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 30,
        base_price: 40,
        time_limit: 10,
        title: "Create Hover Effect for Button",
        description: "Write CSS to increase the button's font size on hover.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Button Hover Effect</title>
                    <link rel="stylesheet" href="styles.css">
                </head>
                <body>
                    <button id="hoverButton">Hover over me!</button>
                </body>
                </html>
            `,
            css: `
                #hoverButton {
                    /* Add CSS to increase font size on hover */
                }
            `,
            js: `
                // No JavaScript required for this task
            `
        },
        testCases: [
            { description: "Button font size increases on hover", expectedOutput: true }
        ]
    },
    // Question 13
    {
        id: "wprb13zx9dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 35,
        base_price: 45,
        time_limit: 8,
        title: "Show Alert on Page Load",
        description: "Write JavaScript to display an alert message when the page loads.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Page Load Alert</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <p>Page content goes here.</p>
                </body>
                </html>
            `,
            css: `
                /* Optional styling for page content */
            `,
            js: `
                // Add code to display an alert with a welcome message when the page loads
                window.addEventListener('load', function() {
                    // Alert message here
                });
            `
        },
        testCases: [
            { description: "Displays alert with 'Welcome!' on page load", expectedOutput: "Welcome!" }
        ]
    },
    // Question 14
    {
        id: "wprb14zx9dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 30,
        base_price: 40,
        time_limit: 10,
        title: "Append Text to Paragraph on Click",
        description: "Write JavaScript to append a new line of text to an existing paragraph when a button is clicked.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Append Text</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <p id="paragraph">Original text.</p>
                    <button id="appendButton">Add Text</button>
                </body>
                </html>
            `,
            css: `
                /* Optional styling for button and paragraph */
            `,
            js: `
                document.getElementById("appendButton").addEventListener("click", function() {
                    // Add code to append new text to the paragraph
                });
            `
        },
        testCases: [
            { description: "Paragraph text changes to 'Original text. New text added.'", expectedOutput: "Original text. New text added." }
        ]
    },
    // Question 15
    {
        id: "wprb15zx9dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 35,
        base_price: 45,
        time_limit: 8,
        title: "Display Date on Button Click",
        description: "Write JavaScript to display the current date below a button when clicked.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Display Date</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <button id="displayDateButton">Show Date</button>
                    <p id="dateParagraph"></p>
                </body>
                </html>
            `,
            css: `
                /* Optional styling for button and date display */
            `,
            js: `
                document.getElementById("displayDateButton").addEventListener("click", function() {
                    // Add code to display the current date in the paragraph with id 'dateParagraph'
                });
            `
        },
        testCases: [
            { description: "Displays the current date in the format 'YYYY-MM-DD'", expectedOutput: true }
        ]
    },
    // Question 16
    {
        id: "wprb16zx9dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 35,
        base_price: 45,
        time_limit: 8,
        title: "Toggle Background Color",
        description: "Write JavaScript to toggle the background color of a div between two colors when a button is clicked.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Toggle Background Color</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <button id="toggleButton">Toggle Color</button>
                    <div id="colorBox" style="width: 100px; height: 100px; background-color: lightblue;"></div>
                </body>
                </html>
            `,
            css: `
                /* Optional styling for button and div */
                #colorBox {
                    transition: background-color 0.3s ease;
                }
            `,
            js: `
                document.getElementById("toggleButton").addEventListener("click", function() {
                    // Add code to toggle the background color of 'colorBox'
                });
            `
        },
        testCases: [
            { description: "Div color toggles between lightblue and lightgreen on each click", expectedOutput: true }
        ]
    },
    // Question 17
    {
        id: "wprb17zx9dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 30,
        base_price: 40,
        time_limit: 8,
        title: "Change Text Color on Hover",
        description: "Write CSS to change the text color of a paragraph when it is hovered over.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Hover Text Color</title>
                    <link rel="stylesheet" href="styles.css">
                </head>
                <body>
                    <p id="hoverText">Hover over this text to change its color.</p>
                </body>
                </html>
            `,
            css: `
                #hoverText {
                    /* Add CSS to change color on hover */
                }
            `,
            js: `
                // No JavaScript needed for this task
            `
        },
        testCases: [
            { description: "Text color changes on hover", expectedOutput: true }
        ]
    },
    // Question 18
    {
        id: "wprb18zx9dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 35,
        base_price: 45,
        time_limit: 9,
        title: "Update Text on Input",
        description: "Write JavaScript to update a paragraph with the text entered in an input field in real-time.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Real-Time Text Update</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <input type="text" id="textInput" placeholder="Type here">
                    <p id="displayText">This text will change.</p>
                </body>
                </html>
            `,
            css: `
                /* Optional styling for input and paragraph */
            `,
            js: `
                document.getElementById("textInput").addEventListener("input", function() {
                    // Add code to update 'displayText' with input text
                });
            `
        },
        testCases: [
            { description: "Paragraph updates with input field content in real-time", expectedOutput: true }
        ]
    },
    // Question 19
    {
        id: "wprb19zx9dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 30,
        base_price: 40,
        time_limit: 8,
        title: "Display Length of Input Text",
        description: "Write JavaScript to display the length of the text entered in an input field below it.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Text Length Display</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <input type="text" id="textInput" placeholder="Type something">
                    <p id="textLength">Length: 0</p>
                </body>
                </html>
            `,
            css: `
                /* Optional styling for input and text length display */
            `,
            js: `
                document.getElementById("textInput").addEventListener("input", function() {
                    // Add code to update 'textLength' with length of input
                });
            `
        },
        testCases: [
            { description: "Displays correct character count of input field text", expectedOutput: true }
        ]
    },
    // Question 20
    {
        id: "wprb20zx9dfghjklm",
        category: "Web Programming",
        difficulty: "Easy",
        points: 35,
        base_price: 45,
        time_limit: 9,
        title: "Calculate and Display Sum",
        description: "Write JavaScript to calculate and display the sum of two numbers entered in two input fields when a button is clicked.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Sum Calculator</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <input type="number" id="num1" placeholder="Enter first number">
                    <input type="number" id="num2" placeholder="Enter second number">
                    <button id="calculateButton">Calculate Sum</button>
                    <p id="sumResult">Sum: </p>
                </body>
                </html>
            `,
            css: `
                /* Optional styling for inputs and button */
            `,
            js: `
                document.getElementById("calculateButton").addEventListener("click", function() {
                    // Add code to calculate and display sum of 'num1' and 'num2'
                });
            `
        },
        testCases: [
            { description: "Displays correct sum of two input numbers", expectedOutput: true }
        ]
    },
    // Question 21
    {
        id: "wprb21dfghijklmnop",
        category: "Web Programming",
        difficulty: "Medium",
        points: 45,
        base_price: 60,
        time_limit: 12,
        title: "Expand/Collapse Text",
        description: "Write JavaScript to toggle the visibility of a paragraph's full content when a button is clicked.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Expand/Collapse Text</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <p id="textContent" style="display: none;">This is the full content of the text.</p>
                    <button id="toggleButton">Show More</button>
                </body>
                </html>
            `,
            css: `
                /* Styling for the button and hidden text */
                #toggleButton {
                    cursor: pointer;
                }
            `,
            js: `
                document.getElementById("toggleButton").addEventListener("click", function() {
                    // Add code to toggle visibility of 'textContent'
                });
            `
        },
        testCases: [
            { description: "Text content displays when button clicked", expectedOutput: true },
            { description: "Text content hides when button clicked again", expectedOutput: true }
        ]
    },
    // Question 22
    {
        id: "wprb22dfghijklmnop",
        category: "Web Programming",
        difficulty: "Medium",
        points: 50,
        base_price: 65,
        time_limit: 15,
        title: "Simple Calculator",
        description: "Create a simple calculator that adds, subtracts, multiplies, or divides two numbers based on user selection.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Simple Calculator</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <input type="number" id="num1" placeholder="Enter first number">
                    <input type="number" id="num2" placeholder="Enter second number">
                    <select id="operation">
                        <option value="add">Add</option>
                        <option value="subtract">Subtract</option>
                        <option value="multiply">Multiply</option>
                        <option value="divide">Divide</option>
                    </select>
                    <button id="calculateButton">Calculate</button>
                    <p id="result">Result: </p>
                </body>
                </html>
            `,
            css: `
                /* Styling for inputs, button, and dropdown */
            `,
            js: `
                document.getElementById("calculateButton").addEventListener("click", function() {
                    // Add code to perform selected operation and display the result
                });
            `
        },
        testCases: [
            { description: "Addition works correctly", expectedOutput: true },
            { description: "Subtraction works correctly", expectedOutput: true },
            { description: "Multiplication works correctly", expectedOutput: true },
            { description: "Division works correctly", expectedOutput: true }
        ]
    },
    // Question 23
    {
        id: "wprb23dfghijklmnop",
        category: "Web Programming",
        difficulty: "Medium",
        points: 55,
        base_price: 70,
        time_limit: 14,
        title: "Character Counter",
        description: "Write JavaScript to count characters in a textarea and display the count below it.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Character Counter</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <textarea id="inputText" placeholder="Type something..."></textarea>
                    <p id="charCount">Character Count: 0</p>
                </body>
                </html>
            `,
            css: `
                /* Styling for textarea and character count display */
                #inputText {
                    width: 100%;
                    height: 100px;
                }
            `,
            js: `
                document.getElementById("inputText").addEventListener("input", function() {
                    // Add code to update 'charCount' with the number of characters typed
                });
            `
        },
        testCases: [
            { description: "Displays correct character count as user types", expectedOutput: true },
            { description: "Character count updates correctly on deletion", expectedOutput: true }
        ]
    },
    // Question 24
    {
        id: "wprb24dfghijklmnop",
        category: "Web Programming",
        difficulty: "Medium",
        points: 50,
        base_price: 65,
        time_limit: 12,
        title: "Light/Dark Theme Toggle",
        description: "Implement a toggle button to switch between light and dark themes for the webpage.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Theme Toggle</title>
                    <script src="script.js" defer></script>
                    <link rel="stylesheet" href="styles.css">
                </head>
                <body>
                    <button id="themeToggleButton">Toggle Theme</button>
                </body>
                </html>
            `,
            css: `
                /* Initial light theme and dark theme styles */
                body.light-theme {
                    background-color: white;
                    color: black;
                }
                body.dark-theme {
                    background-color: black;
                    color: white;
                }
            `,
            js: `
                document.getElementById("themeToggleButton").addEventListener("click", function() {
                    // Add code to toggle between 'light-theme' and 'dark-theme' classes on the body
                });
            `
        },
        testCases: [
            { description: "Switches to dark theme on first toggle", expectedOutput: true },
            { description: "Switches back to light theme on second toggle", expectedOutput: true }
        ]
    },
    // Question 25
    {
        id: "wprb25dfghijklmnop",
        category: "Web Programming",
        difficulty: "Medium",
        points: 55,
        base_price: 70,
        time_limit: 15,
        title: "Display Live Clock",
        description: "Write JavaScript to display the current time and update it every second.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Live Clock</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <p id="liveClock">Current Time: </p>
                </body>
                </html>
            `,
            css: `
                /* Styling for the clock display */
                #liveClock {
                    font-size: 24px;
                    font-weight: bold;
                }
            `,
            js: `
                function updateClock() {
                    // Add code to update 'liveClock' with the current time every second
                }
                setInterval(updateClock, 1000);
            `
        },
        testCases: [
            { description: "Displays current time in correct format", expectedOutput: true },
            { description: "Updates time every second", expectedOutput: true }
        ]
    },
    // Question 26
    {
        id: "wprb26dfghijklmnop",
        category: "Web Programming",
        difficulty: "Medium",
        points: 55,
        base_price: 70,
        time_limit: 14,
        title: "Dynamic List Filter",
        description: "Create a search bar that filters a list of items based on user input.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Dynamic List Filter</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <input type="text" id="searchBar" placeholder="Search items...">
                    <ul id="itemList">
                        <li>Apple</li>
                        <li>Banana</li>
                        <li>Orange</li>
                        <li>Grape</li>
                        <li>Mango</li>
                    </ul>
                </body>
                </html>
            `,
            css: `
                /* Basic styling for the search bar and list */
                #searchBar {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 10px;
                }
                #itemList li {
                    list-style: none;
                }
            `,
            js: `
                document.getElementById("searchBar").addEventListener("input", function() {
                    // Add code to filter 'itemList' based on 'searchBar' value
                });
            `
        },
        testCases: [
            { description: "Filters items based on partial match", expectedOutput: true },
            { description: "Shows all items if search input is empty", expectedOutput: true }
        ]
    },
    // Question 27
    {
        id: "wprb27dfghijklmnop",
        category: "Web Programming",
        difficulty: "Medium",
        points: 50,
        base_price: 65,
        time_limit: 13,
        title: "Random Quote Generator",
        description: "Display a random quote each time a button is clicked.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Random Quote Generator</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <button id="quoteButton">Generate Quote</button>
                    <p id="quoteDisplay">Click the button for a quote.</p>
                </body>
                </html>
            `,
            css: `
                /* Styling for the button and quote display */
                #quoteButton {
                    padding: 10px 20px;
                    cursor: pointer;
                }
                #quoteDisplay {
                    font-style: italic;
                    margin-top: 20px;
                }
            `,
            js: `
                const quotes = ["Stay positive!", "Work hard, dream big.", "Be kind to yourself.", "Every day is a new beginning."];

                document.getElementById("quoteButton").addEventListener("click", function() {
                    // Add code to display a random quote in 'quoteDisplay'
                });
            `
        },
        testCases: [
            { description: "Displays a random quote each time", expectedOutput: true },
            { description: "Quote changes on each button click", expectedOutput: true }
        ]
    },
    // Question 28
    {
        id: "wprb28dfghijklmnop",
        category: "Web Programming",
        difficulty: "Medium",
        points: 55,
        base_price: 70,
        time_limit: 15,
        title: "Word Count in Textarea",
        description: "Write JavaScript to display the word count in a textarea.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Word Counter</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <textarea id="textInput" placeholder="Type your text here..."></textarea>
                    <p id="wordCount">Words: 0</p>
                </body>
                </html>
            `,
            css: `
                /* Styling for textarea and word count */
                #textInput {
                    width: 100%;
                    height: 100px;
                }
                #wordCount {
                    margin-top: 10px;
                }
            `,
            js: `
                document.getElementById("textInput").addEventListener("input", function() {
                    // Add code to update 'wordCount' with the number of words
                });
            `
        },
        testCases: [
            { description: "Word count updates as user types", expectedOutput: true },
            { description: "Word count is accurate", expectedOutput: true }
        ]
    },
    // Question 29
    {
        id: "wprb29dfghijklmnop",
        category: "Web Programming",
        difficulty: "Medium",
        points: 60,
        base_price: 75,
        time_limit: 18,
        title: "Image Carousel",
        description: "Create an image carousel that rotates images every 3 seconds.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Image Carousel</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <div id="carousel">
                        <img id="carouselImage" src="image1.jpg" alt="Image 1">
                    </div>
                </body>
                </html>
            `,
            css: `
                /* Basic styling for carousel */
                #carousel {
                    width: 300px;
                    height: 200px;
                    overflow: hidden;
                }
                #carousel img {
                    width: 100%;
                    height: auto;
                }
            `,
            js: `
                // Array of image sources for the carousel
                const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
                let currentIndex = 0;

                function changeImage() {
                    // Add code to change the 'src' of 'carouselImage' every 3 seconds
                }

                setInterval(changeImage, 3000);
            `
        },
        testCases: [
            { description: "Image changes every 3 seconds", expectedOutput: true },
            { description: "Cycles through all images", expectedOutput: true }
        ]
    },
    // Question 30
    {
        id: "wprb30dfghijklmnop",
        category: "Web Programming",
        difficulty: "Medium",
        points: 60,
        base_price: 75,
        time_limit: 16,
        title: "Show/Hide Password",
        description: "Create a button that toggles the visibility of a password field.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Show/Hide Password</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <input type="password" id="passwordField" placeholder="Enter password">
                    <button id="togglePassword">Show</button>
                </body>
                </html>
            `,
            css: `
                /* Styling for password field and toggle button */
                #passwordField, #togglePassword {
                    margin-top: 10px;
                }
            `,
            js: `
                document.getElementById("togglePassword").addEventListener("click", function() {
                    // Add code to toggle the type of 'passwordField' between 'password' and 'text'
                });
            `
        },
        testCases: [
            { description: "Displays password as text when toggled", expectedOutput: true },
            { description: "Hides password when toggled again", expectedOutput: true }
        ]
    },
    // Question 31
    {
        id: "wprb31dfghijklmnop",
        category: "Web Programming",
        difficulty: "Hard",
        points: 75,
        base_price: 90,
        time_limit: 20,
        title: "Custom Countdown Timer",
        description: "Create a countdown timer that starts from a user-defined number of seconds and displays time remaining.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Countdown Timer</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <input type="number" id="timeInput" placeholder="Enter seconds">
                    <button id="startButton">Start</button>
                    <p id="countdownDisplay">Time Remaining: 0</p>
                </body>
                </html>
            `,
            css: `
                /* Styling for input, button, and countdown display */
                #timeInput, #startButton {
                    margin-top: 10px;
                    padding: 8px;
                }
                #countdownDisplay {
                    margin-top: 20px;
                    font-weight: bold;
                }
            `,
            js: `
                document.getElementById("startButton").addEventListener("click", function() {
                    // Add code to start countdown from timeInput and update countdownDisplay
                });
            `
        },
        testCases: [
            { description: "Counts down from input seconds correctly", expectedOutput: true },
            { description: "Displays 'Time's up!' when countdown reaches zero", expectedOutput: true }
        ]
    },
    // Question 32
    {
        id: "wprb32dfghijklmnop",
        category: "Web Programming",
        difficulty: "Hard",
        points: 80,
        base_price: 95,
        time_limit: 22,
        title: "To-Do List with Add and Delete",
        description: "Create a to-do list that allows users to add tasks and delete individual tasks.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>To-Do List</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <input type="text" id="taskInput" placeholder="Enter task">
                    <button id="addTaskButton">Add Task</button>
                    <ul id="taskList"></ul>
                </body>
                </html>
            `,
            css: `
                /* Styling for input, button, and task list */
                #taskInput {
                    width: 70%;
                    padding: 8px;
                }
                #addTaskButton {
                    padding: 8px;
                    cursor: pointer;
                }
                #taskList li {
                    list-style: none;
                    margin-top: 5px;
                }
            `,
            js: `
                document.getElementById("addTaskButton").addEventListener("click", function() {
                    // Add code to append new task to taskList and allow deletion
                });
            `
        },
        testCases: [
            { description: "Adds new task to the list", expectedOutput: true },
            { description: "Allows deletion of individual tasks", expectedOutput: true }
        ]
    },
    // Question 33
    {
        id: "wprb33dfghijklmnop",
        category: "Web Programming",
        difficulty: "Hard",
        points: 85,
        base_price: 100,
        time_limit: 25,
        title: "Responsive Navigation Menu",
        description: "Create a responsive navigation menu that toggles visibility on smaller screens.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Responsive Nav Menu</title>
                    <link rel="stylesheet" href="styles.css">
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <nav>
                        <button id="menuToggle">☰ Menu</button>
                        <ul id="navMenu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </body>
                </html>
            `,
            css: `
                /* Styling for navigation and toggle button */
                #menuToggle {
                    display: none;
                }
                #navMenu {
                    display: flex;
                }
                @media (max-width: 600px) {
                    #menuToggle {
                        display: block;
                    }
                    #navMenu {
                        display: none;
                    }
                }
            `,
            js: `
                document.getElementById("menuToggle").addEventListener("click", function() {
                    // Add code to toggle visibility of navMenu on small screens
                });
            `
        },
        testCases: [
            { description: "Menu toggles visibility on button click", expectedOutput: true },
            { description: "Menu is hidden on small screens by default", expectedOutput: true }
        ]
    },
    // Question 34
    {
        id: "wprb34dfghijklmnop",
        category: "Web Programming",
        difficulty: "Hard",
        points: 90,
        base_price: 105,
        time_limit: 28,
        title: "Temperature Converter (Celsius to Fahrenheit)",
        description: "Write JavaScript to convert temperature from Celsius to Fahrenheit and display the result.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Temperature Converter</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <input type="number" id="celsiusInput" placeholder="Enter Celsius">
                    <button id="convertButton">Convert</button>
                    <p id="resultDisplay">Fahrenheit: 0</p>
                </body>
                </html>
            `,
            css: `
                /* Styling for input and result display */
                #celsiusInput {
                    margin-top: 10px;
                    padding: 8px;
                }
                #convertButton {
                    padding: 8px;
                }
                #resultDisplay {
                    font-weight: bold;
                    margin-top: 10px;
                }
            `,
            js: `
                document.getElementById("convertButton").addEventListener("click", function() {
                    // Add code to convert Celsius to Fahrenheit and display in resultDisplay
                });
            `
        },
        testCases: [
            { description: "Correctly converts Celsius to Fahrenheit", expectedOutput: true },
            { description: "Displays result in Fahrenheit", expectedOutput: true }
        ]
    },
    // Question 35
    {
        id: "wprb35dfghijklmnop",
        category: "Web Programming",
        difficulty: "Hard",
        points: 85,
        base_price: 100,
        time_limit: 24,
        title: "Simple Quiz Application",
        description: "Create a quiz with 3 questions and display the score based on correct answers.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Simple Quiz</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <div id="quizContainer">
                        <p>1. What is 2 + 2?</p>
                        <input type="text" id="q1">
                        <p>2. What is the capital of France?</p>
                        <input type="text" id="q2">
                        <p>3. What is the boiling point of water (in °C)?</p>
                        <input type="text" id="q3">
                    </div>
                    <button id="submitQuiz">Submit Quiz</button>
                    <p id="scoreDisplay">Score: 0</p>
                </body>
                </html>
            `,
            css: `
                /* Styling for quiz container and score display */
                #quizContainer p {
                    margin-top: 10px;
                }
                #scoreDisplay {
                    font-weight: bold;
                    margin-top: 20px;
                }
            `,
            js: `
                document.getElementById("submitQuiz").addEventListener("click", function() {
                    // Add code to calculate score based on correct answers and display in scoreDisplay
                });
            `
        },
        testCases: [
            { description: "Calculates score correctly", expectedOutput: true },
            { description: "Displays correct score in scoreDisplay", expectedOutput: true }
        ]
    },
    // Question 36
    {
        id: "wprb36dfghijklmnop",
        category: "Web Programming",
        difficulty: "Hard",
        points: 90,
        base_price: 110,
        time_limit: 25,
        title: "Form Validation with Error Messages",
        description: "Create a form that validates input fields and shows error messages if they are empty on submission.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Form Validation</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <form id="userForm">
                        <input type="text" id="name" placeholder="Enter your name">
                        <span id="nameError" class="error">Name is required</span>
                        <input type="email" id="email" placeholder="Enter your email">
                        <span id="emailError" class="error">Email is required</span>
                        <button type="button" id="submitButton">Submit</button>
                    </form>
                </body>
                </html>
            `,
            css: `
                /* Styling for error messages */
                .error {
                    color: red;
                    display: none;
                    font-size: 0.9em;
                }
            `,
            js: `
                document.getElementById("submitButton").addEventListener("click", function() {
                    // Add code to validate form and display error messages if fields are empty
                });
            `
        },
        testCases: [
            { description: "Displays error for empty name", expectedOutput: true },
            { description: "Displays error for empty email", expectedOutput: true },
            { description: "No errors when fields are filled", expectedOutput: true }
        ]
    },
    // Question 37
    {
        id: "wprb37dfghijklmnop",
        category: "Web Programming",
        difficulty: "Hard",
        points: 95,
        base_price: 115,
        time_limit: 28,
        title: "Carousel with Next and Previous Buttons",
        description: "Create an image carousel with 'Next' and 'Previous' buttons to navigate through images.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Image Carousel</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <div id="carousel">
                        <img id="carouselImage" src="image1.jpg" alt="Carousel Image">
                    </div>
                    <button id="prevButton">Previous</button>
                    <button id="nextButton">Next</button>
                </body>
                </html>
            `,
            css: `
                /* Styling for carousel and buttons */
                #carousel {
                    width: 100%;
                    text-align: center;
                    margin-top: 20px;
                }
                button {
                    margin: 10px;
                    padding: 8px;
                }
            `,
            js: `
                document.getElementById("nextButton").addEventListener("click", function() {
                    // Add code to show the next image in the carousel
                });
                document.getElementById("prevButton").addEventListener("click", function() {
                    // Add code to show the previous image in the carousel
                });
            `
        },
        testCases: [
            { description: "Shows the next image", expectedOutput: true },
            { description: "Shows the previous image", expectedOutput: true }
        ]
    },
    // Question 38
    {
        id: "wprb38dfghijklmnop",
        category: "Web Programming",
        difficulty: "Hard",
        points: 100,
        base_price: 120,
        time_limit: 30,
        title: "Modal Popup with Close Button",
        description: "Create a modal popup that appears when a button is clicked and disappears when closed.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Modal Popup</title>
                    <link rel="stylesheet" href="styles.css">
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <button id="openModalButton">Open Modal</button>
                    <div id="modal" class="modal">
                        <div class="modal-content">
                            <span id="closeModalButton">&times;</span>
                            <p>This is a modal popup!</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
            css: `
                /* Styling for modal */
                .modal {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                }
                .modal-content {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                }
                #closeModalButton {
                    cursor: pointer;
                    color: red;
                    font-size: 1.5em;
                }
            `,
            js: `
                document.getElementById("openModalButton").addEventListener("click", function() {
                    // Add code to display the modal
                });
                document.getElementById("closeModalButton").addEventListener("click", function() {
                    // Add code to close the modal
                });
            `
        },
        testCases: [
            { description: "Modal opens when button is clicked", expectedOutput: true },
            { description: "Modal closes when close button is clicked", expectedOutput: true }
        ]
    },
    // Question 39
    {
        id: "wprb39dfghijklmnop",
        category: "Web Programming",
        difficulty: "Hard",
        points: 100,
        base_price: 125,
        time_limit: 35,
        title: "Dynamic Table Filter",
        description: "Create a table with a filter option to search for specific values in a table column.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Table Filter</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <input type="text" id="searchInput" placeholder="Search by name...">
                    <table id="dataTable">
                        <thead>
                            <tr><th>Name</th><th>Age</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>John</td><td>25</td></tr>
                            <tr><td>Jane</td><td>30</td></tr>
                            <tr><td>Mike</td><td>35</td></tr>
                        </tbody>
                    </table>
                </body>
                </html>
            `,
            css: `
                /* Styling for input and table */
                #searchInput {
                    margin: 10px;
                    padding: 8px;
                }
                table {
                    width: 100%;
                    margin-top: 10px;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                }
            `,
            js: `
                document.getElementById("searchInput").addEventListener("input", function() {
                    // Add code to filter table rows based on search input
                });
            `
        },
        testCases: [
            { description: "Filters table based on input", expectedOutput: true },
            { description: "Shows all rows when input is empty", expectedOutput: true }
        ]
    },
    // Question 40
    {
        id: "wprb40dfghijklmnop",
        category: "Web Programming",
        difficulty: "Hard",
        points: 100,
        base_price: 125,
        time_limit: 32,
        title: "Product Card with Quantity Selector",
        description: "Create a product card with an image, title, and quantity selector that updates total price.",
        existingCode: {
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Product Card</title>
                    <script src="script.js" defer></script>
                </head>
                <body>
                    <div class="product-card">
                        <img src="product.jpg" alt="Product Image">
                        <p class="product-title">Product Name</p>
                        <p class="product-price">Price: $20</p>
                        <input type="number" id="quantityInput" min="1" value="1">
                        <p id="totalPrice">Total: $20</p>
                    </div>
                </body>
                </html>
            `,
            css: `
                /* Styling for product card */
                .product-card {
                    text-align: center;
                    margin: 20px;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                }
                .product-title, .product-price, #totalPrice {
                    margin-top: 10px;
                }
            `,
            js: `
                document.getElementById("quantityInput").addEventListener("input", function() {
                    // Add code to update total price based on quantity input
                });
            `
        },
        testCases: [
            { description: "Updates total price based on quantity", expectedOutput: true },
            { description: "Displays correct total when quantity changes", expectedOutput: true }
        ]
    }
]