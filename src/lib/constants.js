export const ALL_PROBLEMS = [
    //=============================================DEBUGGING======================================================
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
        "id": "o4co6gkakgdjy690",
        "category": "Debugging",
        "language": "javascript",
        "time_limit": 8,
        "points": 40,
        "difficulty": "Medium",
        "base_price": 60,
        "title": "Correct the Binary Search Logic",
        "description": "Binary search implementation has an off-by-one error, leading to incorrect results.",
        "buggedCode": "const readline = require('readline');\n\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction binarySearch(arr, x) {\n    let left = 1, right = arr.length;\n    while (left >= right) {\n        let mid = Math.floor((left + right) / 2);\n        if (arr[mid] === x) return mid;\n        else if (arr[mid] > x) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}\n\nrl.question('', (arrayInput) => {\n    rl.question('', (elementInput) => {\n        const arr = JSON.parse(arrayInput);\n        const x = parseInt(elementInput);\n        console.log(binarySearch(arr, x));\n        rl.close();\n    });\n});",
        "solutionCode": "const readline = require('readline');\n\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction binarySearch(arr, x) {\n    let left = 0, right = arr.length - 1;\n    while (left <= right) {\n        let mid = Math.floor((left + right) / 2);\n        if (arr[mid] === x) return mid;\n        else if (arr[mid] < x) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}\n\nrl.question('', (arrayInput) => {\n    rl.question('', (elementInput) => {\n        const arr = JSON.parse(arrayInput);\n        const x = parseInt(elementInput);\n        console.log(binarySearch(arr, x));\n        rl.close();\n    });\n});",
        "testCases": [
            { "input": "[1, 2, 3, 4, 5]\n3", "expectedOutput": "2\n" },
            { "input": "[1, 2, 3, 4, 5]\n5", "expectedOutput": "4\n" },
            { "input": "[1, 2, 3, 4, 5]\n6", "expectedOutput": "-1\n" }
        ]        
    },    
    // Question 22
    {
        "id": "m5b7yg4k3dew4fbd",
        "category": "Debugging",
        "language": "java",
        "time_limit": 7,
        "points": 35,
        "difficulty": "Medium",
        "base_price": 50,
        "title": "Debug Object-Oriented Method",
        "description": "The class method doesn’t update object attributes as expected.",
        "buggedCode": "import java.util.Scanner;\n\npublic class Counter {\n    int count = 0;\n\n    void increment() {\n        int count = 0;\n        count += 1; // This does not affect the instance variable\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        Counter counter = new Counter();\n        int times = scanner.nextInt();\n        for (int i = 0; i < times; i++) {\n            counter.increment();\n        }\n        System.out.println(counter.count);\n        scanner.close();\n    }\n}",
        "solutionCode": "import java.util.Scanner;\n\npublic class Counter {\n    private int count = 0;\n\n    public void increment() {\n        count += 1;\n    }\n\n    public int getCount() {\n        return count;\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        Counter counter = new Counter();\n        int times = scanner.nextInt();\n        for (int i = 0; i < times; i++) {\n            counter.increment();\n        }\n        System.out.println(counter.getCount());\n        scanner.close();\n    }\n}",
        "testCases": [
            { "input": "1", "expectedOutput": "1\n" },
            { "input": "2", "expectedOutput": "2\n" },
            { "input": "0", "expectedOutput": "0\n" }
        ]
    },    
    // Question 23
    {
        "id": "p9vdnqhfsr9drlks",
        "category": "Debugging",
        "language": "python",
        "time_limit": 8,
        "points": 45,
        "difficulty": "Medium",
        "base_price": 65,
        "title": "Fix the Sorting Algorithm Error",
        "description": "Sorting function fails on certain edge cases (like negatives or duplicates).",
        "buggedCode": "def bubble_sort(arr):\n    for i in range(len(arr ) - 1):\n        for j in range(i - 1):\n            if arr[j + 1] > arr[j - 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\nif __name__ == '__main__':\n    arr = list(map(int, input().split()))\n    print(bubble_sort(arr))",
        "solutionCode": "def bubble_sort(arr):\n    for i in range(len(arr)):\n        for j in range(len(arr) - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\nif __name__ == '__main__':\n    arr = list(map(int, input().split()))\n    print(bubble_sort(arr))",
        "testCases": [
            { "input": "3 1 2", "expectedOutput": "[1, 2, 3]\n" },
            { "input": "5 3 8 6 2", "expectedOutput": "[2, 3, 5, 6, 8]\n" },
            { "input": "1 -1 0", "expectedOutput": "[-1, 0, 1]\n" }
        ]
    },    
    // Question 24
    {
        "id": "8f1c7d4b3e5926ab",
        "category": "Debugging",
        "language": "javascript",
        "time_limit": 7,
        "points": 35,
        "difficulty": "Medium",
        "base_price": 50,
        "title": "Resolve List of Lists Issue",
        "description": "Accessing elements in a list of lists is causing index errors.",
        "buggedCode": "const readline = require('readline');\n\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction createMatrix() {\n    const matrix = Array(3).fill(Array(3).fill(0));\n    matrix[0][0] = 1;\n    return matrix;\n}\n\nrl.question('', () => {\n    console.log(createMatrix());\n    rl.close();\n});",
        "solutionCode": "const readline = require('readline');\n\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction createMatrix() {\n    const matrix = Array.from({ length: 3 }, () => Array(3).fill(0));\n    matrix[0][0] = 1;\n    return matrix;\n}\n\nrl.question('', () => {\n    console.log(JSON.stringify(createMatrix()));\n    rl.close();\n});",
        "testCases": [
            { "input": "", "expectedOutput": "[[1,0,0],[0,0,0],[0,0,0]]\n" },
            { "input": "", "expectedOutput": "[[1,0,0],[0,0,0],[0,0,0]]\n" },
            { "input": "", "expectedOutput": "[[1,0,0],[0,0,0],[0,0,0]]\n" }
        ]
    },    
    // Question 25
    {
        "id": "2a5e9d8c4f1273bd",
        "category": "Debugging",
        "language": "python",
        "time_limit": 7,
        "points": 40,
        "difficulty": "Medium",
        "base_price": 60,
        "title": "Adjust the File Reading Logic",
        "description": "The file read function doesn’t handle empty lines correctly.",
        "buggedCode": "def read_file(content):\n    for line in content.splitlines():\n        print(line)\n\nif __name__ == '__main__':\n    content = input()\n    read_file(content)",
        "solutionCode": "def read_file(content):\n    for line in content.splitlines():\n        if line.strip():\n            print(line.strip())\n\nif __name__ == '__main__':\n    content = input()\n    read_file(content)",
        "testCases": [
            { "input": "\"Line1\\n\\nLine2\\nLine3\"", "expectedOutput": "\"Line1\\n\\nLine2\\nLine3\"\n" },
            { "input": "\"LineA\\n\\nLineB\\nLineC\"", "expectedOutput": "\"LineA\\n\\nLineB\\nLineC\"\n" },
            { "input": "\"First\\n\\nSecond\\nThird\"", "expectedOutput": "\"First\\n\\nSecond\\nThird\"\n" }
        ]
    },    
    // Question 26
    {
        "id": "ja3892jkjbfiubo9fbu_2",
        "category": "Debugging",
        "language": "cpp",
        "time_limit": 8,
        "points": 45,
        "difficulty": "Medium",
        "base_price": 60,
        "title": "Fix the Prime Check Logic",
        "description": "Prime checking function is failing due to incorrect loop bounds.",
        "buggedCode": "#include <iostream>\n#include <cmath>\n\nbool is_prime(int n) {\n    for (int i = 0; i < n; i++) {\n        if (n % i == 0) {\n            return true;\n        }\n    }\n    return false;\n}\n\nint main() {\n    int n;\n    std::cin >> n;\n    std::cout << (is_prime(n) ? \"True\" : \"False\") << std::endl;\n    return 0;\n}",
        "solutionCode": "#include <iostream>\n#include <cmath>\n\nbool is_prime(int n) {\n    if (n <= 1) return false;\n    for (int i = 2; i <= std::sqrt(n); i++) {\n        if (n % i == 0) {\n            return false;\n        }\n    }\n    return true;\n}\n\nint main() {\n    int n;\n    std::cin >> n;\n    std::cout << (is_prime(n) ? \"True\" : \"False\") << std::endl;\n    return 0;\n}",
        "testCases": [
            { "input": "5", "expectedOutput": "True\n" },
            { "input": "10", "expectedOutput": "False\n" },
            { "input": "1", "expectedOutput": "False\n" }
        ]
    },
    // Question 27
    {
        "id": "79afbiu2jbif_02jk",
        "category": "Debugging",
        "language": "java",
        "time_limit": 7,
        "points": 35,
        "difficulty": "Medium",
        "base_price": 55,
        "title": "Correct the String Reversal Logic",
        "description": "The function to reverse a string has a bug where it fails with certain inputs, producing incorrect results.",
        "buggedCode": "import java.util.Scanner;\n\npublic class Main {\n    public static String reverse(String s) {\n        String reversed = \"\";\n        for (int i = 0; i <= s.length(); i++) {\n            reversed += s.charAt(i);\n        }\n        return reversed;\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        System.out.println(reverse(input));\n        scanner.close();\n    }\n}",
        "solutionCode": "import java.util.Scanner;\n\npublic class Main {\n    public static String reverse(String s) {\n        String reversed = \"\";\n        for (int i = s.length() - 1; i >= 0; i--) {\n            reversed += s.charAt(i);\n        }\n        return reversed;\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        System.out.println(reverse(input));\n        scanner.close();\n    }\n}",
        "testCases": [
            { "input": "\"hello\"", "expectedOutput": "\"olleh\"\n" },
            { "input": "\"Java\"", "expectedOutput": "\"avaJ\"\n" },
            { "input": "\"OpenAI\"", "expectedOutput": "\"IAnepO\"\n" }
        ]
    },
    // Question 28
    {
        "id": "iba73uiUYd_3kndaub8",
        "category": "Debugging",
        "language": "python",
        "time_limit": 8,
        "points": 40,
        "difficulty": "Medium",
        "base_price": 60,
        "title": "Debug Regular Expression Pattern",
        "description": "The regex pattern is incorrect and doesn’t match underscore characters as expected.",
        "buggedCode": "import re\n\npattern = r\"[a-zA-Z]+\"\nmatches = re.findall(pattern, input())\nprint(matches)",
        "solutionCode": "import re\n\npattern = r\"[a-zA-Z0-9_]+\"\nmatches = re.findall(pattern, input())\nprint(matches)",
        "testCases": [
            { "input": "\"hello_world\"", "expectedOutput": "['hello_world']\n" },
            { "input": "\"OpenAI_test123\"", "expectedOutput": "['OpenAI_test123']\n" },
            { "input": "\"test_case\"", "expectedOutput": "['test_case']\n" }
        ]
    },
    // Question 29
    {
        "id": "niIBSbb83ib_90duib",
        "category": "Debugging",
        "language": "cpp",
        "time_limit": 9,
        "points": 50,
        "difficulty": "Medium",
        "base_price": 70,
        "title": "Resolve Stack Overflow in Recursive Function",
        "description": "The recursive function causes a stack overflow for large inputs.",
        "buggedCode": "#include <iostream>\nusing namespace std;\n\nint factorial(int n) {\n    if (n == 0) return 1;\n    return n * factorial(n - 1);\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << factorial(n) << endl;\n    return 0;\n}",
        "solutionCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint factorial(int n) {\n    if (n == 0 || n == 1) return 1;\n    vector<int> results(n + 1, 1);\n    for (int i = 2; i <= n; i++) {\n        results[i] = i * results[i - 1];\n    }\n    return results[n];\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << factorial(n) << endl;\n    return 0;\n}",
        "testCases": [
            { "input": "5", "expectedOutput": "120\n" },
            { "input": "10", "expectedOutput": "3628800\n" },
            { "input": "20", "expectedOutput": "-2102132736\n" }
        ]
    },
    // Question 30
    {
        "id": "dYU7dbUSbMOSAiuge_2",
        "category": "Debugging",
        "language": "java",
        "time_limit": 8,
        "points": 45,
        "difficulty": "Medium",
        "base_price": 65,
        "title": "Fix the Merge Sort Implementation",
        "description": "Merge sort function fails due to incorrect handling of merging arrays.",
        "buggedCode": "import java.util.Arrays;\n\npublic class MergeSort {\n    public static void mergeSort(int[] arr) {\n        if (arr.length > 1) {\n            int mid = arr.length / 2;\n            int[] left = Arrays.copyOfRange(arr, 0, mid);\n            int[] right = Arrays.copyOfRange(arr, mid, arr.length);\n            mergeSort(left);\n            mergeSort(right);\n\n            int i = 0, j = 0, k = 0;\n            while (i < left.length && j < right.length) {\n                arr[k++] = left[i] < right[j] ? left[i++] : right[j++];\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        java.util.Scanner scanner = new java.util.Scanner(System.in);\n        String input = scanner.nextLine();\n        int[] arr = Arrays.stream(input.split(\",\")).mapToInt(Integer::parseInt).toArray();\n        mergeSort(arr);\n        System.out.println(Arrays.toString(arr));\n        scanner.close();\n    }\n}",
        "solutionCode": "import java.util.Arrays;\n\npublic class MergeSort {\n    public static void mergeSort(int[] arr) {\n        if (arr.length > 1) {\n            int mid = arr.length / 2;\n            int[] left = Arrays.copyOfRange(arr, 0, mid);\n            int[] right = Arrays.copyOfRange(arr, mid, arr.length);\n            mergeSort(left);\n            mergeSort(right);\n\n            int i = 0, j = 0, k = 0;\n            while (i < left.length && j < right.length) {\n                arr[k++] = left[i] < right[j] ? left[i++] : right[j++];\n            }\n\n            while (i < left.length) {\n                arr[k++] = left[i++];\n            }\n\n            while (j < right.length) {\n                arr[k++] = right[j++];\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        java.util.Scanner scanner = new java.util.Scanner(System.in);\n        String input = scanner.nextLine();\n        int[] arr = Arrays.stream(input.split(\",\")).mapToInt(Integer::parseInt).toArray();\n        mergeSort(arr);\n        System.out.println(Arrays.toString(arr));\n        scanner.close();\n    }\n}",
        "testCases": [
            { "input": "3,1,2", "expectedOutput": "[1, 2, 3]\n" },
            { "input": "5,3,8,6,2", "expectedOutput": "[2, 3, 5, 6, 8]\n" },
            { "input": "1,-1,0", "expectedOutput": "[-1, 0, 1]\n" }
        ]
    },
    // Question 31
    {
        "id": "YVidydid8uidapo8Uka",
        "category": "Debugging",
        "language": "python",
        "time_limit": 7,
        "points": 35,
        "difficulty": "Medium",
        "base_price": 70,
        "title": "Correct the Array Replacement Logic",
        "description": "The function is supposed to replace all occurrences of a target element in an array with another specified element, but it’s failing to modify the array as expected.",
        "buggedCode": "def replace_elements(arr, target, new_value):\n    for el in arr:\n        if el == target:\n            el = new_value\n    return arr\n\nimport sys\ninput_data = sys.stdin.read().splitlines()\narr = list(map(int, input_data[0].strip('[]').split(',')))\ntarget = int(input_data[1])\nnew_value = int(input_data[2])\nprint(replace_elements(arr, target, new_value))\n",
        "solutionCode": "def replace_elements(arr, target, new_value):\n    for i in range(len(arr)):\n        if arr[i] == target:\n            arr[i] = new_value\n    return arr\n\nimport sys\ninput_data = sys.stdin.read().splitlines()\narr = list(map(int, input_data[0].strip('[]').split(',')))\ntarget = int(input_data[1])\nnew_value = int(input_data[2])\nprint(replace_elements(arr, target, new_value))\n",
        "testCases": [
            { "input": "[1, 2, 3, 2, 4]\n2\n9\n", "expectedOutput": "[1, 9, 3, 9, 4]\n" },
            { "input": "[5, 5, 5, 5]\n5\n0\n", "expectedOutput": "[0, 0, 0, 0]\n" },
            { "input": "[1, 2, 3, 4, 5]\n6\n10\n", "expectedOutput": "[1, 2, 3, 4, 5]\n" }
        ]
    },      
    // Question 32
    {
        "id": "csijbYVj7fbkBud_2jbad",
        "category": "Debugging",
        "language": "java",
        "time_limit": 8,
        "points": 45,
        "difficulty": "Medium",
        "base_price": 65,
        "title": "Resolve Dynamic Programming Overhead",
        "description": "Fibonacci sequence implementation without memoization leads to high time complexity. Add memoization to improve performance.",
        "buggedCode": "import java.util.HashMap;\nimport java.util.Scanner;\n\npublic class Fibonacci {\n    public static int fib(int n) {\n        if (n < 1) return 1;\n        return fib(n) + fib(n - 2);\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        System.out.println(fib(n));\n        scanner.close();\n    }\n}",
        "solutionCode": "import java.util.HashMap;\nimport java.util.Scanner;\n\npublic class Fibonacci {\n    private static HashMap<Integer, Integer> memo = new HashMap<>();\n\n    public static int fib(int n) {\n        if (n <= 1) return n;\n        if (memo.containsKey(n)) return memo.get(n);\n        int result = fib(n - 1) + fib(n - 2);\n        memo.put(n, result);\n        return result;\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int n = scanner.nextInt();\n        System.out.println(fib(n));\n        scanner.close();\n    }\n}",
        "testCases": [
            { "input": "10\n", "expectedOutput": "55\n" },
            { "input": "20\n", "expectedOutput": "6765\n" },
            { "input": "30\n", "expectedOutput": "832040\n" }
        ]
    },   
    // Question 33  
    {
        "id": "asdjba89324uibkjBuii_3isb",
        "category": "Debugging",
        "language": "java",
        "time_limit": 9,
        "points": 50,
        "difficulty": "Medium",
        "base_price": 70,
        "title": "Debug the Caesar Cipher Encryption Algorithm",
        "description": "The Caesar Cipher encryption function fails to produce correct and reversible outputs due to logic errors. Ensure that the cipher correctly shifts characters.",
        "buggedCode": "import java.util.Scanner;\n\npublic class CaesarCipher {\n    public static String encrypt(String text, int shift) {\n        StringBuilder result = new StringBuilder();\n        for (int i = 0; i < text.length() - 1; i++) {\n            char c = text.charAt(i);\n            if (Character.isLetter(c)) {\n                c += shift; // Incorrectly shifts beyond alphabet boundaries\n            }\n            result.append(c);\n        }\n        return result.toString();\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String text = scanner.nextLine();\n        int shift = scanner.nextInt();\n        System.out.println(encrypt(text, shift));\n        scanner.close();\n    }\n}",
        "solutionCode": "import java.util.Scanner;\n\npublic class CaesarCipher {\n    public static String encrypt(String text, int shift) {\n        StringBuilder result = new StringBuilder();\n        for (int i = 0; i < text.length(); i++) {\n            char c = text.charAt(i);\n            if (Character.isLetter(c)) {\n                char base = Character.isUpperCase(c) ? 'A' : 'a';\n                c = (char) ((c - base + shift) % 26 + base);\n            }\n            result.append(c);\n        }\n        return result.toString();\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String text = scanner.nextLine();\n        int shift = scanner.nextInt();\n        System.out.println(encrypt(text, shift));\n        scanner.close();\n    }\n}",
        "testCases": [
            { "input": "HELLO\n3\n", "expectedOutput": "KHOOR\n" },
            { "input": "hello\n1\n", "expectedOutput": "ifmmp\n" },
            { "input": "abcxyz\n3\n", "expectedOutput": "defabc\n" }
        ]
    },     
    // Question 34
    {
        "id": "dakjfk389ndaiubIUVYUd89a",
        "category": "Debugging",
        "language": "python",
        "time_limit": 12,
        "points": 75,
        "difficulty": "Hard",
        "base_price": 90,
        "title": "Resolve Recursion Depth Limit in Factorial Calculation",
        "description": "The recursive factorial function fails on large inputs due to excessive recursion depth. Implement an optimized approach.",
        "buggedCode": "def factorial(n):\n    result = 1\n    for i in range(2, n):\n        result += i\n    return result\n\nif __name__ == '__main__':\n    import sys\n    input = sys.stdin.read\n    n = int(input().strip())\n    print(factorial(n))",
        "solutionCode": "def factorial(n):\n    result = 1\n    for i in range(2, n + 1):\n        result *= i\n    return result\n\nif __name__ == '__main__':\n    import sys\n    input = sys.stdin.read\n    n = int(input().strip())\n    print(factorial(n))",
        "testCases": [
            { "input": "5\n", "expectedOutput": "120\n" },
            { "input": "20\n", "expectedOutput": "2432902008176640000\n" },
            { "input": "50\n", "expectedOutput": "30414093201713378043612608166064768844377641568960512000000000000\n" }
        ]
    },    
    // Question 35
    {
        "id": "3d2a9f0b6hij874c",
        "category": "Debugging",
        "language": "cpp",
        "time_limit": 14,
        "points": 80,
        "difficulty": "Hard",
        "base_price": 95,
        "title": "Fix the Binary Tree Height Calculation",
        "description": "The height calculation for a binary tree is incorrect due to improper handling of recursive calls.",
        "buggedCode": "#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* left;\n    Node* right;\n    Node(int val) : data(val), left(NULL), right(NULL) {}\n};\n\nint calculateHeight(Node* root) {\n    if (root == NULL) return 0;\n    int leftHeight = calculateHeight(root->left);\n    int rightHeight = calculateHeight(root->right);\n    return max(leftHeight, rightHeight); // Missing +1 for the root level\n}\n\nint main() {\n    Node* root = new Node(1);\n    root->left = new Node(2);\n    root->right = new Node(3);\n    root->left->left = new Node(4);\n    root->left->right = new Node(5);\n    cout << calculateHeight(root) << endl;\n    return 0;\n}",
        "solutionCode": "#include <iostream>\nusing namespace std;\n\nstruct Node {\n    int data;\n    Node* left;\n    Node* right;\n    Node(int val) : data(val), left(NULL), right(NULL) {}\n};\n\nint calculateHeight(Node* root) {\n    if (root == NULL) return 0;\n    int leftHeight = calculateHeight(root->left);\n    int rightHeight = calculateHeight(root->right);\n    return max(leftHeight, rightHeight) + 1;\n}\n\nint main() {\n    Node* root = new Node(1);\n    root->left = new Node(2);\n    root->right = new Node(3);\n    root->left->left = new Node(4);\n    root->left->right = new Node(5);\n    cout << calculateHeight(root) << endl;\n    return 0;\n}",
        "testCases": [
            { "input": "", "expectedOutput": "3\n" },
            { "input": "", "expectedOutput": "3\n" },
            { "input": "", "expectedOutput": "3\n" }
        ]
    },    
    // Question 36
    {
        "id": "afbilnYUVD893b_dabui33jkb",
        "category": "Debugging",
        "language": "java",
        "time_limit": 10,
        "points": 70,
        "difficulty": "Hard",
        "base_price": 85,
        "title": "Fix the Graph Cycle Detection Algorithm",
        "description": "The cycle detection in a directed graph is incorrect due to improper recursion stack handling.",
        "buggedCode": "import java.util.*;\n\npublic class Graph {\n    private Map<Integer, List<Integer>> adjList = new HashMap<>();\n\n    public void addEdge(int u, int w) {\n        adjList.putIfAbsent(u, new ArrayList<>());\n        adjList.get(u).add(v);\n    }\n\n    public boolean hasCycle() {\n        Set<Integer> visited = new HashSet<>();\n        for (int node : adjList.keySet()) {\n            if (dfs(node, visited)) return true;\n        }\n        return false;\n    }\n\n    private boolean dfs(int node, Set<Integer> visited) {\n        if (visited.contains(node)) return true;\n        visited.add(node);\n        for (int neighbor : adjList.get(node)) {\n            if (dfs(neighbor, visited)) return true;\n        }\n        visited.remove(node);\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Graph graph = new Graph();\n        graph.addEdge(1, 2);\n        graph.addEdge(2, 3);\n        graph.addEdge(3, 1);\n        System.out.println(graph.hasCycle());\n    }\n}",
        "solutionCode": "import java.util.*;\n\npublic class Graph {\n    private Map<Integer, List<Integer>> adjList = new HashMap<>();\n\n    public void addEdge(int u, int v) {\n        adjList.putIfAbsent(u, new ArrayList<>());\n        adjList.get(u).add(v);\n    }\n\n    public boolean hasCycle() {\n        Set<Integer> visited = new HashSet<>();\n        Set<Integer> recursionStack = new HashSet<>();\n        for (int node : adjList.keySet()) {\n            if (dfs(node, visited, recursionStack)) return true;\n        }\n        return false;\n    }\n\n    private boolean dfs(int node, Set<Integer> visited, Set<Integer> recursionStack) {\n        if (recursionStack.contains(node)) return true;\n        if (visited.contains(node)) return false;\n\n        visited.add(node);\n        recursionStack.add(node);\n\n        for (int neighbor : adjList.get(node)) {\n            if (dfs(neighbor, visited, recursionStack)) return true;\n        }\n\n        recursionStack.remove(node);\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Graph graph = new Graph();\n        graph.addEdge(1, 2);\n        graph.addEdge(2, 3);\n        graph.addEdge(3, 1);\n        System.out.println(graph.hasCycle());\n    }\n}",
        "testCases": [
            { "input": "", "expectedOutput": "true\n" },
            { "input": "", "expectedOutput": "true\n" },
            { "input": "", "expectedOutput": "true\n" }
        ]
    },    
    // Question 37
    {
        "id": "UIBbe7gr3ibaso_3dba",
        "category": "Debugging",
        "language": "python",
        "time_limit": 12,
        "points": 75,
        "difficulty": "Hard",
        "base_price": 90,
        "title": "Correct the Backtracking Sudoku Solver",
        "description": "The backtracking solution for solving a Sudoku puzzle is failing due to incorrect backtracking conditions.",
        "buggedCode": "def is_valid(board, row, col, num):\n    for i in range(9):\n        if board[row][i] == num or board[i][row] == num:\n            return False\n    startRow, startCol = 3 * (row // 3), 3 * (col // 3)\n    for i in range(3):\n        for j in range(3):\n            if board[i + startRow][j + startCol] == num:\n                return False\n    return True\n\ndef solve_sudoku(board):\n    for row in range(9):\n        for row in range(9):\n            if board[col][row] == 1:\n                for num in range(1, 10):\n                    if is_valid(board, row, col, num):\n                        board[row][col] = num\n                        if solve_sudoku(board):\n                            return True\n                        board[col][row] = 0\n                return False\n    return True\n\nif __name__ == '__main__':\n    import sys\n    input = sys.stdin.read\n    board = [list(map(int, row.strip().split())) for row in input().strip().split('\\n')]\n    solve_sudoku(board)\n    for row in board:\n        print(' '.join(map(str, row)))",
        "solutionCode": "def is_valid(board, row, col, num):\n    for i in range(9):\n        if board[row][i] == num or board[i][col] == num:\n            return False\n    startRow, startCol = 3 * (row // 3), 3 * (col // 3)\n    for i in range(3):\n        for j in range(3):\n            if board[i + startRow][j + startCol] == num:\n                return False\n    return True\n\ndef solve_sudoku(board):\n    for row in range(9):\n        for col in range(9):\n            if board[row][col] == 0:\n                for num in range(1, 10):\n                    if is_valid(board, row, col, num):\n                        board[row][col] = num\n                        if solve_sudoku(board):\n                            return True\n                        board[row][col] = 0\n                return False\n    return True\n\nif __name__ == '__main__':\n    import sys\n    input = sys.stdin.read\n    board = [list(map(int, row.strip().split())) for row in input().strip().split('\\n')]\n    solve_sudoku(board)\n    for row in board:\n        print(' '.join(map(str, row)))",
        "testCases": [
            {
                "input": "5 3 0 0 7 0 0 0 0\n6 0 0 1 9 5 0 0 0\n0 9 8 0 0 0 0 6 0\n8 0 0 0 6 0 0 0 3\n4 0 0 8 0 3 0 0 1\n7 0 0 0 2 0 0 0 6\n0 6 0 0 0 0 2 8 0\n0 0 0 4 1 9 0 0 5\n0 0 0 0 8 0 0 7 9\n",
                "expectedOutput": "5 3 4 6 7 8 9 1 2\n6 7 2 1 9 5 3 4 8\n1 9 8 3 4 2 5 6 7\n8 5 9 7 6 1 4 2 3\n4 2 6 8 5 3 7 9 1\n7 1 3 9 2 4 8 5 6\n9 6 1 5 3 7 2 8 4\n2 8 7 4 1 9 6 3 5\n3 4 5 2 8 6 1 7 9\n"
            },
            {
                "input": "0 0 0 2 6 0 7 0 1\n6 8 0 0 7 0 0 9 0\n1 9 0 0 0 4 5 0 0\n8 2 0 1 0 0 0 4 0\n0 0 4 6 0 2 9 0 0\n0 5 0 0 0 3 0 2 8\n0 0 9 3 0 0 0 7 4\n0 4 0 0 5 0 0 3 6\n7 0 3 0 1 8 0 0 0\n",
                "expectedOutput": "4 3 5 2 6 9 7 8 1\n6 8 2 5 7 1 4 9 3\n1 9 7 8 3 4 5 6 2\n8 2 6 1 9 5 3 4 7\n3 7 4 6 8 2 9 1 5\n9 5 1 7 4 3 6 2 8\n5 1 9 3 2 6 8 7 4\n2 4 8 9 5 7 1 3 6\n7 6 3 4 1 8 2 5 9\n"
            }
        ]
    },    
    // Question 38
    {
        "id": "dajYUVy83BIUddkajoiin",
        "category": "Debugging",
        "language": "python",
        "time_limit": 13,
        "points": 75,
        "difficulty": "Hard",
        "base_price": 105,
        "title": "Fix the Recursive Sum Logic",
        "description": "Recursive sum function doesn’t return correct results due to improper base cases.",
        "buggedCode": "def recursive_sum(n):\n    if n == 1:\n        return n\n    return n + recursive_sum(n + 1)\n\nif __name__ == '__main__':\n    import sys\n    input = sys.stdin.read\n    n = int(input().strip())\n    print(recursive_sum(n))",
        "solutionCode": "def recursive_sum(n):\n    if n <= 0:\n        return 0\n    return n + recursive_sum(n - 1)\n\nif __name__ == '__main__':\n    import sys\n    input = sys.stdin.read\n    n = int(input().strip())\n    print(recursive_sum(n))",
        "testCases": [
            { "input": "5\n", "expectedOutput": "15\n" },
            { "input": "10\n", "expectedOutput": "55\n" },
            { "input": "0\n", "expectedOutput": "0\n" }
        ]
    },    
    {
        "id": "asjbfui3iYVyfewui_IBuir",
        "category": "Debugging",
        "language": "python",
        "time_limit": 14,
        "points": 80,
        "difficulty": "Hard",
        "base_price": 110,
        "title": "Correct the Custom Exception Handling",
        "description": "Custom exception handling code isn’t functioning as expected, leading to unhandled exceptions.",
        "buggedCode": "class CustomError(Exception):\n    pass\n\ndef raise_custom_error():\n    raise CustomError('An error occurred')\n\nif __name__ == '__main__':\n    raise_custom_error()",
        "solutionCode": "class CustomError(Exception):\n    pass\n\ndef raise_custom_error():\n    try:\n        raise CustomError('An error occurred')\n    except CustomError as e:\n        print(e)\n\nif __name__ == '__main__':\n    raise_custom_error()",
        "testCases": [
            { "input": "", "expectedOutput": "An error occurred\n" },
            { "input": "", "expectedOutput": "An error occurred\n" },
            { "input": "", "expectedOutput": "An error occurred\n" }
        ]
    },    
    // Question 40
    {
        "id": "abBbuiwbekUIr42_dauibHJ",
        "category": "Debugging",
        "language": "c",
        "time_limit": 10,
        "points": 40,
        "difficulty": "Hard",
        "base_price": 60,
        "title": "Fix the Word Capitalization Logic",
        "description": "The function to capitalize the first letter of each word in a sentence is not working correctly due to improper character handling.",
        "buggedCode": "#include <stdio.h>\n#include <ctype.h>\n\nvoid capitalize_words(char* sentence) {\n    int capitalize = 0;\n    for (int i = 0; sentence[i] == '\\0'; i++) {\n        if (sentence[i] == '') {\n            capitalize = 1;\n        } else if (capitalize) {\n            sentence[i] = tolower(sentence[i]);\n            capitalize = 1;\n        }\n    }\n}\n\nint main() {\n    char sentence[100];\n    fgets(sentence, sizeof(sentence), stdin);\n    capitalize_words(sentence);\n    printf(\"%s\", sentence);\n    return 0;\n}",
        "solutionCode": "#include <stdio.h>\n#include <ctype.h>\n\nvoid capitalize_words(char* sentence) {\n    int capitalize = 1;\n    for (int i = 0; sentence[i] != '\\0'; i++) {\n        if (sentence[i] == ' ') {\n            capitalize = 1;\n        } else if (capitalize && isalpha(sentence[i])) {\n            sentence[i] = toupper(sentence[i]);\n            capitalize = 0;\n        }\n    }\n}\n\nint main() {\n    char sentence[100];\n    fgets(sentence, sizeof(sentence), stdin);\n    capitalize_words(sentence);\n    printf(\"%s\", sentence);\n    return 0;\n}",
        "testCases": [
            { "input": "hello world\n", "expectedOutput": "Hello World\n" },
            { "input": "this is a test\n", "expectedOutput": "This Is A Test\n" },
            { "input": "capitalize each word\n", "expectedOutput": "Capitalize Each Word\n" }
        ]
    },    
    // =========================================DSA & Problem Solving============================================
    // Problem 1
    {
        id: "uiB78BUILN99D_ADUIBuibd",
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
            python: `def find_largest(arr):\n    # Code from here\n\narr = list(map(int, input().strip("[]").split(", ")))\nprint(find_largest(arr))`,
            
            cpp: `#include <iostream>\n#include <vector>\nint findLargest(const std::vector<int>& arr) {\n    // Code from here\n}\n\nint main() {\n    std::vector<int> arr;\n    int num;\n    while (std::cin >> num) arr.push_back(num);\n    std::cout << findLargest(arr) << std::endl;\n    return 0;\n}`,
            
            java: `import java.util.*;\npublic class Main {\n    public static int findLargest(List<Integer> arr) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        List<Integer> arr = new ArrayList<>();\n        while (sc.hasNextInt()) arr.add(sc.nextInt());\n        System.out.println(findLargest(arr));\n    }\n}`,
            
            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction findLargest(arr) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const arr = JSON.parse(input);\n    console.log(findLargest(arr));\n    rl.close();\n});`,
            
            c: `#include <stdio.h>\nint findLargest(int arr[], int n) {\n    // Code from here\n}\n\nint main() {\n    int arr[100], n = 0;\n    while (scanf("%d", &arr[n]) != EOF) n++;\n    printf("%d\\n", findLargest(arr, n));\n    return 0;\n}`
        }
    },

    // Problem 2
    {
        id: "sdanUYbdjalo8oh",
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
            python: `def count_vowels(s):\n    # Code from here\n\ns = input().strip()\nprint(count_vowels(s))`,
            
            cpp: `#include <iostream>\n#include <string>\nint countVowels(const std::string& s) {\n    // Code from here\n}\n\nint main() {\n    std::string s;\n    std::getline(std::cin, s);\n    std::cout << countVowels(s) << std::endl;\n    return 0;\n}`,
            
            java: `import java.util.Scanner;\npublic class Main {\n    public static int countVowels(String s) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(countVowels(s));\n    }\n}`,
            
            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction countVowels(s) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    console.log(countVowels(input));\n    rl.close();\n});`,
            
            c: `#include <stdio.h>\n#include <string.h>\nint countVowels(char s[]) {\n    // Code from here\n}\n\nint main() {\n    char s[100];\n    scanf("%[^\n]", s);\n    printf("%d\\n", countVowels(s));\n    return 0;\n}`
        }
    },

    // Problem 3
    {
        id: "adsniu8gwkbo8921JKds",
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
            python: `def sum_elements(arr):\n    # Code from here\n\narr = list(map(int, input().strip("[]").split(", ")))\nprint(sum_elements(arr))`,
            
            cpp: `#include <iostream>\n#include <vector>\nint sumElements(const std::vector<int>& arr) {\n    // Code from here\n}\n\nint main() {\n    std::vector<int> arr;\n    int num;\n    while (std::cin >> num) arr.push_back(num);\n    std::cout << sumElements(arr) << std::endl;\n    return 0;\n}`,
            
            java: `import java.util.*;\npublic class Main {\n    public static int sumElements(List<Integer> arr) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        List<Integer> arr = new ArrayList<>();\n        while (sc.hasNextInt()) arr.add(sc.nextInt());\n        System.out.println(sumElements(arr));\n    }\n}`,
            
            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction sumElements(arr) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const arr = JSON.parse(input);\n    console.log(sumElements(arr));\n    rl.close();\n});`,
            
            c: `#include <stdio.h>\nint sumElements(int arr[], int n) {\n    // Code from here\n}\n\nint main() {\n    int arr[100], n = 0;\n    while (scanf("%d", &arr[n]) != EOF) n++;\n    printf("%d\\n", sumElements(arr, n));\n    return 0;\n}`
        }
    },

    // Problem 4
    {
        id: "dqwooUIBmMioew42kldK",
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
            python: `def reverse_string(s):\n    # Code from here\n\ns = input().strip()\nprint(reverse_string(s))`,
            
            cpp: `#include <iostream>\n#include <string>\nstd::string reverseString(const std::string& s) {\n    // Code from here\n}\n\nint main() {\n    std::string s;\n    std::getline(std::cin, s);\n    std::cout << reverseString(s) << std::endl;\n    return 0;\n}`,
            
            java: `import java.util.Scanner;\npublic class Main {\n    public static String reverseString(String s) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(reverseString(s));\n    }\n}`,
            
            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction reverseString(s) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    console.log(reverseString(input));\n    rl.close();\n});`,
            
            c: `#include <stdio.h>\n#include <string.h>\nvoid reverseString(char* s) {\n    // Code from here\n}\n\nint main() {\n    char s[100];\n    scanf("%[^\n]", s);\n    reverseString(s);\n    printf("%s\\n", s);\n    return 0;\n}`
        }
    },

    // Problem 5
    {
        id: "UBIkwm8hUI8efnkAP90",
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
            python: `def check_even_odd(n):\n    # Code from here\n\nn = int(input())\nprint(check_even_odd(n))`,
            
            cpp: `#include <iostream>\n#include <string>\nstd::string checkEvenOdd(int n) {\n    // Code from here\n}\n\nint main() {\n    int n;\n    std::cin >> n;\n    std::cout << checkEvenOdd(n) << std::endl;\n    return 0;\n}`,
            
            java: `import java.util.Scanner;\npublic class Main {\n    public static String checkEvenOdd(int n) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(checkEvenOdd(n));\n    }\n}`,
            
            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction checkEvenOdd(n) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    console.log(checkEvenOdd(parseInt(input)));\n    rl.close();\n});`,
            
            c: `#include <stdio.h>\nconst char* checkEvenOdd(int n) {\n    // Code from here\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%s\\n", checkEvenOdd(n));\n    return 0;\n}`
        }
    },
    // Problem 6
    {
        id: "asibIUbir3y2jnsuiiuxIUU",
        category: "DSA & Problem Solving",
        title: "Nth Fibonacci Number",
        description: "Find the Nth number in the Fibonacci sequence.",
        time_limit: 5,
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
            python: `def fibonacci(n):\n    # Code from here\n\nn = int(input())\nprint(fibonacci(n))`,
            
            cpp: `#include <iostream>\nint fibonacci(int n) {\n    // Code from here\n}\n\nint main() {\n    int n;\n    std::cin >> n;\n    std::cout << fibonacci(n) << std::endl;\n    return 0;\n}`,
            
            java: `import java.util.Scanner;\npublic class Main {\n    public static int fibonacci(int n) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(fibonacci(n));\n    }\n}`,
            
            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction fibonacci(n) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    console.log(fibonacci(parseInt(input)));\n    rl.close();\n});`,
            
            c: `#include <stdio.h>\nint fibonacci(int n) {\n    // Code from here\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%d\\n", fibonacci(n));\n    return 0;\n}`
        }
    },

    // Problem 7
    {
        id: "YUBi4neiuBUbfewb89riub",
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
            python: `def find_smallest(arr):\n    # Code from here\n\narr = list(map(int, input().strip("[]").split(", ")))\nprint(find_smallest(arr))`,
            
            cpp: `#include <iostream>\n#include <vector>\nint findSmallest(const std::vector<int>& arr) {\n    // Code from here\n}\n\nint main() {\n    std::vector<int> arr;\n    int num;\n    while (std::cin >> num) arr.push_back(num);\n    std::cout << findSmallest(arr) << std::endl;\n    return 0;\n}`,
            
            java: `import java.util.*;\npublic class Main {\n    public static int findSmallest(List<Integer> arr) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        List<Integer> arr = new ArrayList<>();\n        while (sc.hasNextInt()) arr.add(sc.nextInt());\n        System.out.println(findSmallest(arr));\n    }\n}`,
            
            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction findSmallest(arr) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const arr = JSON.parse(input);\n    console.log(findSmallest(arr));\n    rl.close();\n});`,
            
            c: `#include <stdio.h>\nint findSmallest(int arr[], int n) {\n    // Code from here\n}\n\nint main() {\n    int arr[100], n = 0;\n    while (scanf("%d", &arr[n]) != EOF) n++;\n    printf("%d\\n", findSmallest(arr, n));\n    return 0;\n}`
        }
    },

    // Problem 8
    {
        id: "paoinn44eiOnfeno48ns",
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
            python: `def is_palindrome(word):\n    # Code from here\n\nword = input().strip()\nprint(is_palindrome(word))`,
            
            cpp: `#include <iostream>\n#include <string>\nbool isPalindrome(const std::string& word) {\n    // Code from here\n}\n\nint main() {\n    std::string word;\n    std::getline(std::cin, word);\n    std::cout << (isPalindrome(word) ? "True" : "False") << std::endl;\n    return 0;\n}`,
            
            java: `import java.util.Scanner;\npublic class Main {\n    public static boolean isPalindrome(String word) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String word = sc.nextLine();\n        System.out.println(isPalindrome(word));\n    }\n}`,
            
            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction isPalindrome(word) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    console.log(isPalindrome(input) ? "True" : "False");\n    rl.close();\n});`,
            
            c: `#include <stdio.h>\n#include <string.h>\nint isPalindrome(char word[]) {\n    // Code from here\n}\n\nint main() {\n    char word[100];\n    scanf("%s", word);\n    printf("%s\\n", isPalindrome(word) ? "True" : "False");\n    return 0;\n}`
        }
    },

    // Problem 9
    {
        id: "Iijjbwe7bcUIUeknois90_dab",
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
            python: `def count_digits(n):\n    # Code from here\n\nn = int(input())\nprint(count_digits(n))`,
            
            cpp: `#include <iostream>\nint countDigits(int n) {\n    // Code from here\n}\n\nint main() {\n    int n;\n    std::cin >> n;\n    std::cout << countDigits(n) << std::endl;\n    return 0;\n}`,
            
            java: `import java.util.Scanner;\npublic class Main {\n    public static int countDigits(int n) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(countDigits(n));\n    }\n}`,
            
            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction countDigits(n) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    console.log(countDigits(parseInt(input)));\n    rl.close();\n});`,
            
            c: `#include <stdio.h>\nint countDigits(int n) {\n    // Code from here\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%d\\n", countDigits(n));\n    return 0;\n}`
        }
    },

    // Problem 10
    {
        id: "Iuieubuib23uibsuUIUIU",
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
            python: `def find_duplicates(arr):\n    # Code from here\n\narr = list(map(int, input().strip("[]").split(", ")))\nprint(find_duplicates(arr))`,
            
            cpp: `#include <iostream>\n#include <vector>\n#include <unordered_set>\nstd::vector<int> findDuplicates(const std::vector<int>& arr) {\n    // Code from here\n}\n\nint main() {\n    std::vector<int> arr;\n    int num;\n    while (std::cin >> num) arr.push_back(num);\n    std::vector<int> duplicates = findDuplicates(arr);\n    for (int d : duplicates) std::cout << d << " ";\n    return 0;\n}`,
            
            java: `import java.util.*;\npublic class Main {\n    public static List<Integer> findDuplicates(List<Integer> arr) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        List<Integer> arr = new ArrayList<>();\n        while (sc.hasNextInt()) arr.add(sc.nextInt());\n        System.out.println(findDuplicates(arr));\n    }\n}`,
            
            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction findDuplicates(arr) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const arr = JSON.parse(input);\n    console.log(findDuplicates(arr));\n    rl.close();\n});`,
            
            c: `#include <stdio.h>\n#include <stdlib.h>\nvoid findDuplicates(int arr[], int n) {\n    // Code from here\n}\n\nint main() {\n    int arr[100], n = 0;\n    while (scanf("%d", &arr[n]) != EOF) n++;\n    findDuplicates(arr, n);\n    return 0;\n}`
        }
    },
    // Problem 11
    {
        id: "iebHUHsYeuybkanhudi3_ib48d",
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
            python: `def calculate_average(arr):\n    # Code from here\n\narr = list(map(int, input().strip("[]").split(", ")))\nprint(calculate_average(arr))`,
            
            cpp: `#include <iostream>\n#include <vector>\ndouble calculateAverage(const std::vector<int>& arr) {\n    // Code from here\n}\n\nint main() {\n    std::vector<int> arr;\n    int num;\n    while (std::cin >> num) arr.push_back(num);\n    std::cout << calculateAverage(arr) << std::endl;\n    return 0;\n}`,
            
            java: `import java.util.*;\npublic class Main {\n    public static double calculateAverage(int[] arr) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();\n        System.out.println(calculateAverage(arr));\n    }\n}`,
            
            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction calculateAverage(arr) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const arr = JSON.parse(input);\n    console.log(calculateAverage(arr));\n    rl.close();\n});`,
            
            c: `#include <stdio.h>\ndouble calculateAverage(int arr[], int n) {\n    // Code from here\n}\n\nint main() {\n    int n, arr[100];\n    scanf("%d", &n);\n    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);\n    printf("%.1f\\n", calculateAverage(arr, n));\n    return 0;\n}`
        }
    },

    // Problem 12
    {
        id: "nuifjinY398dniusipaO",
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
            python: `def is_prime(n):\n    # Code from here\n\nn = int(input())\nprint(is_prime(n))`,
            
            cpp: `#include <iostream>\nbool isPrime(int n) {\n    // Code from here\n}\n\nint main() {\n    int n;\n    std::cin >> n;\n    std::cout << (isPrime(n) ? "True" : "False") << std::endl;\n    return 0;\n}`,
            
            java: `import java.util.Scanner;\npublic class Main {\n    public static boolean isPrime(int n) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(isPrime(n));\n    }\n}`,
            
            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction isPrime(n) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    console.log(isPrime(parseInt(input)));\n    rl.close();\n});`,
            
            c: `#include <stdio.h>\nint isPrime(int n) {\n    // Code from here\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%s\\n", isPrime(n) ? "True" : "False");\n    return 0;\n}`
        }
    },

    // Problem 13
    {
        id: "jdjbIdaib9032dkjab398d_di",
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
            python: `def count_words(sentence):\n    # Code from here\n\nsentence = input().strip()\nprint(count_words(sentence))`,
            
            cpp: `#include <iostream>\n#include <string>\nint countWords(const std::string& sentence) {\n    // Code from here\n}\n\nint main() {\n    std::string sentence;\n    std::getline(std::cin, sentence);\n    std::cout << countWords(sentence) << std::endl;\n    return 0;\n}`,
            
            java: `import java.util.Scanner;\npublic class Main {\n    public static int countWords(String sentence) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String sentence = sc.nextLine();\n        System.out.println(countWords(sentence));\n    }\n}`,
            
            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction countWords(sentence) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    console.log(countWords(input));\n    rl.close();\n});`,
            
            c: `#include <stdio.h>\nint countWords(char sentence[]) {\n    // Code from here\n}\n\nint main() {\n    char sentence[100];\n    fgets(sentence, 100, stdin);\n    printf("%d\\n", countWords(sentence));\n    return 0;\n}`
        }
    },

    // Problem 14
    {
        id: "adbByu9848ndaubyua03q34",
        category: "DSA & Problem Solving",
        title: "Find Second Largest Number",
        description: "Given a list of numbers, find the second largest number.",
        time_limit: 4,
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
            python: `def second_largest(arr):\n    # Code from here\n\narr = list(map(int, input().strip("[]").split(", ")))\nprint(second_largest(arr))`,
            
            cpp: `#include <iostream>\n#include <vector>\nint secondLargest(const std::vector<int>& arr) {\n    // Code from here\n}\n\nint main() {\n    std::vector<int> arr;\n    int num;\n    while (std::cin >> num) arr.push_back(num);\n    std::cout << secondLargest(arr) << std::endl;\n    return 0;\n}`,
            
            java: `import java.util.Scanner;\npublic class Main {\n    public static int secondLargest(int[] arr) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();\n        System.out.println(secondLargest(arr));\n    }\n}`,
            
            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction secondLargest(arr) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const arr = JSON.parse(input);\n    console.log(secondLargest(arr));\n    rl.close();\n});`,
            
            c: `#include <stdio.h>\nint secondLargest(int arr[], int n) {\n    // Code from here\n}\n\nint main() {\n    int arr[100], n;\n    scanf("%d", &n);\n    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);\n    printf("%d\\n", secondLargest(arr, n));\n    return 0;\n}`
        }
    },

    // Problem 15
    {
        id: "oiwerUGrwbHIUdwklakoie",
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
            python: `def celsius_to_fahrenheit(c):\n    # Code from here\n\nc = int(input())\nprint(celsius_to_fahrenheit(c))`,
            
            cpp: `#include <iostream>\ndouble celsiusToFahrenheit(double c) {\n    // Code from here\n}\n\nint main() {\n    double c;\n    std::cin >> c;\n    std::cout << celsiusToFahrenheit(c) << std::endl;\n    return 0;\n}`,
            
            java: `import java.util.Scanner;\npublic class Main {\n    public static double celsiusToFahrenheit(double c) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double c = sc.nextDouble();\n        System.out.println(celsiusToFahrenheit(c));\n    }\n}`,
            
            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nfunction celsiusToFahrenheit(c) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    console.log(celsiusToFahrenheit(parseFloat(input)));\n    rl.close();\n});`,
            
            c: `#include <stdio.h>\ndouble celsiusToFahrenheit(double c) {\n    // Code from here\n}\n\nint main() {\n    double c;\n    scanf("%lf", &c);\n    printf("%.1f\\n", celsiusToFahrenheit(c));\n    return 0;\n}`
        }
    },
    // Problem 16
    {
        id: "jixYUGybfeOIJden88923k",
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
            python: `def remove_duplicates(arr):\n    # Code from here\n\narr = list(map(int, input().strip("[]").split(", ")))\nprint(remove_duplicates(arr))`,
            
            cpp: `#include <iostream>\n#include <vector>\n#include <unordered_set>\nstd::vector<int> removeDuplicates(const std::vector<int>& arr) {\n    // Code from here\n}\n\nint main() {\n    std::vector<int> arr = {1, 2, 2, 3, 4, 4}; // Modify as per input\n    std::vector<int> unique = removeDuplicates(arr);\n    for (int num : unique) std::cout << num << " ";\n    return 0;\n}`,

            java: `import java.util.*;\npublic class Main {\n    public static List<Integer> removeDuplicates(List<Integer> arr) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        List<Integer> arr = Arrays.asList(1, 2, 2, 3, 4, 4);\n        System.out.println(removeDuplicates(arr));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction removeDuplicates(arr) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const arr = JSON.parse(input);\n    console.log(removeDuplicates(arr));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nvoid removeDuplicates(int arr[], int n) {\n    // Code from here\n}\n\nint main() {\n    int arr[] = {1, 2, 2, 3, 4, 4};\n    removeDuplicates(arr, 6);\n    return 0;\n}`
        }
    },

    // Problem 17
    {
        id: "asdjhbUG2322d_djnui2",
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
            python: `def count_consonants(s):\n    # Code from here\n\ns = input().strip()\nprint(count_consonants(s))`,
            
            cpp: `#include <iostream>\n#include <string>\nint countConsonants(const std::string& s) {\n    // Code from here\n}\n\nint main() {\n    std::string s;\n    std::getline(std::cin, s);\n    std::cout << countConsonants(s) << std::endl;\n    return 0;\n}`,

            java: `import java.util.Scanner;\npublic class Main {\n    public static int countConsonants(String s) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(countConsonants(s));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction countConsonants(s) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    console.log(countConsonants(input));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nint countConsonants(char s[]) {\n    // Code from here\n}\n\nint main() {\n    char s[100];\n    fgets(s, 100, stdin);\n    printf("%d\\n", countConsonants(s));\n    return 0;\n}`
        }
    },

    // Problem 18
    {
        id: "HYe32uiaidankKJdeb",
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
            python: `def calculate_interest(p, r, t):\n    # Code from here\n\np, r, t = map(int, input().split(','))\nprint(calculate_interest(p, r, t))`,
            
            cpp: `#include <iostream>\ndouble calculateInterest(double p, double r, double t) {\n    // Code from here\n}\n\nint main() {\n    double p, r, t;\n    std::cin >> p >> r >> t;\n    std::cout << calculateInterest(p, r, t) << std::endl;\n    return 0;\n}`,

            java: `import java.util.Scanner;\npublic class Main {\n    public static double calculateInterest(double p, double r, double t) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double p = sc.nextDouble(), r = sc.nextDouble(), t = sc.nextDouble();\n        System.out.println(calculateInterest(p, r, t));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction calculateInterest(p, r, t) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const [p, r, t] = input.split(',').map(Number);\n    console.log(calculateInterest(p, r, t));\n    rl.close();\n});`,

            c: `#include <stdio.h>\ndouble calculateInterest(double p, double r, double t) {\n    // Code from here\n}\n\nint main() {\n    double p, r, t;\n    scanf("%lf %lf %lf", &p, &r, &t);\n    printf("%.2f\\n", calculateInterest(p, r, t));\n    return 0;\n}`
        }
    },

    // Problem 19
    {
        id: "dhYUUGhjaknaioooaienUIHr3222",
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
            python: `def factorial(n):\n    # Code from here\n\nn = int(input())\nprint(factorial(n))`,
            
            cpp: `#include <iostream>\nint factorial(int n) {\n    // Code from here\n}\n\nint main() {\n    int n;\n    std::cin >> n;\n    std::cout << factorial(n) << std::endl;\n    return 0;\n}`,

            java: `import java.util.Scanner;\npublic class Main {\n    public static int factorial(int n) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(factorial(n));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction factorial(n) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const n = parseInt(input);\n    console.log(factorial(n));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nint factorial(int n) {\n    // Code from here\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%d\\n", factorial(n));\n    return 0;\n}`
        }
    },

    // Problem 20
    {
        id: "djUBurmao9342nandinwqP_dqi",
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
            python: `def first_character(s):\n    # Code from here\n\ns = input().strip()\nprint(first_character(s))`,
            
            cpp: `#include <iostream>\nchar firstCharacter(const std::string& s) {\n    // Code from here\n}\n\nint main() {\n    std::string s;\n    std::cin >> s;\n    std::cout << firstCharacter(s) << std::endl;\n    return 0;\n}`,

            java: `import java.util.Scanner;\npublic class Main {\n    public static char firstCharacter(String s) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(firstCharacter(s));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction firstCharacter(s) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    console.log(firstCharacter(input));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nchar firstCharacter(char s[]) {\n    // Code from here\n}\n\nint main() {\n    char s[100];\n    scanf("%s", s);\n    printf("%c\\n", firstCharacter(s));\n    return 0;\n}`
        }
    },
    // Problem 21
    {
        id: "iduiUIgbka8ih8989Buieoiaoi",
        category: "DSA & Problem Solving",
        title: "Count Letters in String",
        description: "Given a string, count the total number of letters (ignore spaces and punctuation).",
        time_limit: 7,
        points: 25,
        difficulty: "Easy",
        base_price: 30,
        exampleInput: '"Why are you Gay!?"',
        exampleOutput: "12",
        testCases: [
            { input: '"Why are you Gay?!"', expectedOutput: "12" },
            { input: '"OpenAI GPT-3"', expectedOutput: "8" },
            { input: '"Hello, World!"', expectedOutput: "10" }
        ],
        existingCode: {
            python: `def count_letters(s):\n    # Code from here\n\ns = input().strip()\nprint(count_letters(s))`,

            cpp: `#include <iostream>\n#include <cctype>\nint countLetters(std::string s) {\n    // Code from here\n}\n\nint main() {\n    std::string s;\n    std::getline(std::cin, s);\n    std::cout << countLetters(s) << std::endl;\n    return 0;\n}`,

            java: `import java.util.Scanner;\npublic class Main {\n    public static int countLetters(String s) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(countLetters(s));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction countLetters(s) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    console.log(countLetters(input));\n    rl.close();\n});`,

            c: `#include <stdio.h>\n#include <ctype.h>\nint countLetters(char s[]) {\n    // Code from here\n}\n\nint main() {\n    char s[100];\n    fgets(s, sizeof(s), stdin);\n    printf("%d\\n", countLetters(s));\n    return 0;\n}`
        }
    },

    // Problem 22
    {
        id: "djbuiejnani8y4389u832jkdjb",
        category: "DSA & Problem Solving",
        title: "Merge Two Sorted Arrays",
        description: "Given two sorted arrays, merge them into a single sorted array.",
        time_limit: 5,
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
            python: `def merge_sorted(arr1, arr2):\n    # Code from here\n\narr1 = list(map(int, input().strip("[]").split(",")))\narr2 = list(map(int, input().strip("[]").split(",")))\nprint(merge_sorted(arr1, arr2))`,

            cpp: `#include <iostream>\n#include <vector>\nstd::vector<int> mergeSorted(std::vector<int>& arr1, std::vector<int>& arr2) {\n    // Code from here\n}\n\nint main() {\n    std::vector<int> arr1 = {1, 3, 5};\n    std::vector<int> arr2 = {2, 4, 6};\n    std::vector<int> result = mergeSorted(arr1, arr2);\n    for (int n : result) std::cout << n << " "; std::cout << std::endl;\n    return 0;\n}`,

            java: `import java.util.*;\npublic class Main {\n    public static int[] mergeSorted(int[] arr1, int[] arr2) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        int[] arr1 = {1, 3, 5};\n        int[] arr2 = {2, 4, 6};\n        System.out.println(Arrays.toString(mergeSorted(arr1, arr2)));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction mergeSorted(arr1, arr2) {\n    // Code from here\n}\n\nrl.question('', (input1) => {\n    rl.question('', (input2) => {\n        const arr1 = JSON.parse(input1);\n        const arr2 = JSON.parse(input2);\n        console.log(mergeSorted(arr1, arr2));\n        rl.close();\n    });\n});`,

            c: `#include <stdio.h>\nvoid mergeSorted(int arr1[], int n1, int arr2[], int n2, int result[]) {\n    // Code from here\n}\n\nint main() {\n    int arr1[] = {1, 3, 5}, arr2[] = {2, 4, 6};\n    int result[6];\n    mergeSorted(arr1, 3, arr2, 3, result);\n    for (int i = 0; i < 6; i++) printf("%d ", result[i]);\n    printf("\\n");\n    return 0;\n}`
        }
    },

    // Problem 23
    {
        id: "diuiruihhn23ui3u9u329ndiuhuihknliojoisjn",
        category: "DSA & Problem Solving",
        title: "Check Anagram",
        description: "Determine if two strings are anagrams of each other.",
        time_limit: 7,
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
            python: `def is_anagram(s1, s2):\n    # Code from here\n\ns1, s2 = input().split(", ")\nprint(is_anagram(s1.strip('"'), s2.strip('"')))`,

            cpp: `#include <iostream>\n#include <string>\nbool isAnagram(std::string s1, std::string s2) {\n    // Code from here\n}\n\nint main() {\n    std::string s1 = "listen", s2 = "silent";\n    std::cout << (isAnagram(s1, s2) ? "True" : "False") << std::endl;\n    return 0;\n}`,

            java: `import java.util.*;\npublic class Main {\n    public static boolean isAnagram(String s1, String s2) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        String s1 = "listen", s2 = "silent";\n        System.out.println(isAnagram(s1, s2));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction isAnagram(s1, s2) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const [s1, s2] = input.split(', ');\n    console.log(isAnagram(s1, s2));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nint isAnagram(char s1[], char s2[]) {\n    // Code from here\n}\n\nint main() {\n    char s1[] = "listen", s2[] = "silent";\n    printf("%s\\n", isAnagram(s1, s2) ? "True" : "False");\n    return 0;\n}`
        }
    },

    // Problem 24
    {
        id: "anui4nui48jwh84u34930kjfsnjihi4347238702",
        category: "DSA & Problem Solving",
        title: "Find Missing Number",
        description: "Given an array of integers from 1 to N with one number missing, find the missing number.",
        time_limit: 8,
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
            python: `def find_missing(arr, N):\n    # Code from here\n\narr = list(map(int, input().strip("[]").split(",")))\nN = int(input())\nprint(find_missing(arr, N))`,

            cpp: `#include <iostream>\nint findMissing(int arr[], int N) {\n    // Code from here\n}\n\nint main() {\n    int arr[] = {1, 2, 4, 5};\n    int N = 5;\n    std::cout << findMissing(arr, N) << std::endl;\n    return 0;\n}`,

            java: `public class Main {\n    public static int findMissing(int[] arr, int N) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 4, 5};\n        int N = 5;\n        System.out.println(findMissing(arr, N));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction findMissing(arr, N) {\n    // Code from here\n}\n\nrl.question('', (input1) => {\n    const arr = JSON.parse(input1);\n    rl.question('', (input2) => {\n        const N = parseInt(input2);\n        console.log(findMissing(arr, N));\n        rl.close();\n    });\n});`,

            c: `#include <stdio.h>\nint findMissing(int arr[], int N) {\n    // Code from here\n}\n\nint main() {\n    int arr[] = {1, 2, 4, 5};\n    int N = 5;\n    printf("%d\\n", findMissing(arr, N));\n    return 0;\n}`
        }
    },
    // Problem 25
    {
        id: "_324iwh8hknfknsfh_3ui4hiwnei",
        category: "DSA & Problem Solving",
        title: "Reverse an Array",
        description: "Write a function to reverse the elements of an array.",
        time_limit: 4,
        points: 15,
        difficulty: "Medium",
        base_price: 20,
        exampleInput: "[1, 2, 3, 4, 5]",
        exampleOutput: "[5, 4, 3, 2, 1]",
        testCases: [
            { input: "[1, 2, 3, 4, 5]", expectedOutput: "[5, 4, 3, 2, 1]" },
            { input: "[10, 20, 30]", expectedOutput: "[30, 20, 10]" },
            { input: "[4, 3, 2, 1]", expectedOutput: "[1, 2, 3, 4]" }
        ],
        existingCode: {
            python: `def reverse_array(arr):\n    # Code from here\n\narr = list(map(int, input().strip("[]").split(",")))\nprint(reverse_array(arr))`,

            cpp: `#include <iostream>\n#include <vector>\nvoid reverseArray(std::vector<int>& arr) {\n    // Code from here\n}\n\nint main() {\n    std::vector<int> arr = {1, 2, 3, 4, 5};\n    reverseArray(arr);\n    for (int n : arr) std::cout << n << " "; std::cout << std::endl;\n    return 0;\n}`,

            java: `import java.util.Arrays;\npublic class Main {\n    public static int[] reverseArray(int[] arr) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        System.out.println(Arrays.toString(reverseArray(arr)));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction reverseArray(arr) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const arr = JSON.parse(input);\n    console.log(reverseArray(arr));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nvoid reverseArray(int arr[], int n) {\n    // Code from here\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    reverseArray(arr, n);\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}`
        }
    },
    // Problem 26
    {
        id: "IUio28nL_jfbuibLIDB",
        category: "DSA & Problem Solving",
        title: "Count Unique Elements",
        description: "Given an array of integers, count the number of unique elements.",
        time_limit: 5,
        points: 20,
        difficulty: "Easy",
        base_price: 25,
        exampleInput: "[1, 2, 3, 4, 4, 4]",
        exampleOutput: "4",
        testCases: [
            { input: "[1, 2, 3, 4, 4, 4]", expectedOutput: "4" },
            { input: "[5, 5, 5, 5]", expectedOutput: "1" },
            { input: "[10, 20, 20, 30]", expectedOutput: "3" }
        ],
        existingCode: {
            python: `def count_unique(arr):\n    # Code from here\n\narr = list(map(int, input().strip("[]").split(",")))\nprint(count_unique(arr))`,

            cpp: `#include <iostream>\n#include <unordered_set>\nint countUnique(std::vector<int> arr) {\n    // Code from here\n}\n\nint main() {\n    std::vector<int> arr = {1, 2, 3, 4, 4, 4};\n    std::cout << countUnique(arr) << std::endl;\n    return 0;\n}`,

            java: `import java.util.*;\npublic class Main {\n    public static int countUnique(int[] arr) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 4, 4};\n        System.out.println(countUnique(arr));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction countUnique(arr) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const arr = JSON.parse(input);\n    console.log(countUnique(arr));\n    rl.close();\n});`,

            c: `#include <stdio.h>\n#include <stdbool.h>\nint countUnique(int arr[], int n) {\n    // Code from here\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 4, 4};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    printf("%d\\n", countUnique(arr, n));\n    return 0;\n}`
        }
    },

    // Problem 27
    {
        id: "_eknfui4bnkjs_3hbsuibfknnaof",
        category: "DSA & Problem Solving",
        title: "Sum of Digits",
        description: "Given a non-negative integer, calculate the sum of its digits.",
        time_limit: 4,
        points: 20,
        difficulty: "Medium",
        base_price: 25,
        exampleInput: "143",
        exampleOutput: "8",
        testCases: [
            { input: "143", expectedOutput: "8" },
            { input: "999", expectedOutput: "27" },
            { input: "12345", expectedOutput: "15" }
        ],
        existingCode: {
            python: `def sum_of_digits(n):\n    # Code from here\n\nn = int(input().strip())\nprint(sum_of_digits(n))`,

            cpp: `#include <iostream>\nint sumOfDigits(int n) {\n    // Code from here\n}\n\nint main() {\n    int n;\n    std::cin >> n;\n    std::cout << sumOfDigits(n) << std::endl;\n    return 0;\n}`,

            java: `import java.util.Scanner;\npublic class Main {\n    public static int sumOfDigits(int n) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(sumOfDigits(n));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction sumOfDigits(n) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    console.log(sumOfDigits(parseInt(input)));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nint sumOfDigits(int n) {\n    // Code from here\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%d\\n", sumOfDigits(n));\n    return 0;\n}`
        }
    },

    // Problem 28
    {
        id: "8932jdiah823hinuhodifihsidfifhfujfk",
        category: "DSA & Problem Solving",
        title: "Find GCD of Two Numbers",
        description: "Write a function to find the GCD of two numbers.",
        time_limit: 5,
        points: 30,
        difficulty: "Medium",
        base_price: 35,
        exampleInput: "8, 12",
        exampleOutput: "4",
        testCases: [
            { input: "8, 12", expectedOutput: "4" },
            { input: "7, 3", expectedOutput: "1" },
            { input: "24, 36", expectedOutput: "12" }
        ],
        existingCode: {
            python: `def gcd(a, b):\n    # Code from here\n\na, b = map(int, input().split(","))\nprint(gcd(a, b))`,

            cpp: `#include <iostream>\nint gcd(int a, int b) {\n    // Code from here\n}\n\nint main() {\n    int a, b;\n    std::cin >> a >> b;\n    std::cout << gcd(a, b) << std::endl;\n    return 0;\n}`,

            java: `import java.util.Scanner;\npublic class Main {\n    public static int gcd(int a, int b) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        System.out.println(gcd(a, b));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction gcd(a, b) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const [a, b] = input.split(',').map(Number);\n    console.log(gcd(a, b));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nint gcd(int a, int b) {\n    // Code from here\n}\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    printf("%d\\n", gcd(a, b));\n    return 0;\n}`
        }
    },

    // Problem 29
    {
        id: "oadudakjojmiof832u90239uu3kfnu38",
        category: "DSA & Problem Solving",
        title: "Check Integer Palindrome",
        description: "Determine if a given integer is a palindrome.",
        time_limit: 4,
        points: 25,
        difficulty: "Medium",
        base_price: 30,
        exampleInput: "121",
        exampleOutput: "True",
        testCases: [
            { input: "121", expectedOutput: "True" },
            { input: "123", expectedOutput: "False" },
            { input: "1331", expectedOutput: "True" }
        ],
        existingCode: {
            python: `def is_palindrome(n):\n    # Code from here\n\nn = int(input())\nprint(is_palindrome(n))`,

            cpp: `#include <iostream>\nbool isPalindrome(int n) {\n    // Code from here\n}\n\nint main() {\n    int n;\n    std::cin >> n;\n    std::cout << (isPalindrome(n) ? "True" : "False") << std::endl;\n    return 0;\n}`,

            java: `import java.util.Scanner;\npublic class Main {\n    public static boolean isPalindrome(int n) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(isPalindrome(n));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction isPalindrome(n) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    console.log(isPalindrome(parseInt(input)));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nint isPalindrome(int n) {\n    // Code from here\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%s\\n", isPalindrome(n) ? "True" : "False");\n    return 0;\n}`
        }
    },

    // Problem 30
    {
        id: "efjU2398497894dsnsibub_ndin",
        category: "DSA & Problem Solving",
        title: "Rotate Array to Right",
        description: "Rotate an array to the right by a given number of steps.",
        time_limit: 8,
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
            python: `def rotate_array(arr, k):\n    # Code from here\n\narr = list(map(int, input().strip("[]").split(",")))\nk = int(input().strip("steps = "))\nprint(rotate_array(arr, k))`,

            cpp: `#include <iostream>\n#include <vector>\nvoid rotateArray(std::vector<int>& arr, int k) {\n    // Code from here\n}\n\nint main() {\n    std::vector<int> arr = {1, 2, 3, 4, 5};\n    int k = 2;\n    rotateArray(arr, k);\n    for (int n : arr) std::cout << n << " "; std::cout << std::endl;\n    return 0;\n}`,

            java: `import java.util.*;\npublic class Main {\n    public static int[] rotateArray(int[] arr, int k) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        int k = 2;\n        System.out.println(Arrays.toString(rotateArray(arr, k)));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction rotateArray(arr, k) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const arr = JSON.parse(input);\n    rl.question('', (steps) => {\n        console.log(rotateArray(arr, parseInt(steps)));\n        rl.close();\n    });\n});`,

            c: `#include <stdio.h>\nvoid rotateArray(int arr[], int n, int k) {\n    // Code from here\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int k = 2;\n    rotateArray(arr, n, k);\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    return 0;\n}`
        }
    },
    // Problem 31
    {
        id: "halakfubuifenuibuKJBUIbfnuiweui23u8923",
        category: "DSA & Problem Solving",
        title: "Nth Fibonacci Term (Iterative)",
        description: "Write a function to return the Nth term of the Fibonacci sequence using iteration.",
        time_limit: 5,
        points: 30,
        difficulty: "Medium",
        base_price: 35,
        exampleInput: "N = 6",
        exampleOutput: "8",
        testCases: [
            { input: "6", expectedOutput: "8" },
            { input: "10", expectedOutput: "55" },
            { input: "15", expectedOutput: "610" }
        ],
        existingCode: {
            python: `def fibonacci(n):\n    # Code from here\n\nn = int(input())\nprint(fibonacci(n))`,

            cpp: `#include <iostream>\nint fibonacci(int n) {\n    // Code from here\n}\n\nint main() {\n    int n;\n    std::cin >> n;\n    std::cout << fibonacci(n) << std::endl;\n    return 0;\n}`,

            java: `import java.util.Scanner;\npublic class Main {\n    public static int fibonacci(int n) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(fibonacci(n));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction fibonacci(n) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    console.log(fibonacci(parseInt(input)));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nint fibonacci(int n) {\n    // Code from here\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%d\\n", fibonacci(n));\n    return 0;\n}`
        }
    },

    // Problem 32
    {
        id: "mfioIruibuinui893u899unisbfufbkjn",
        category: "DSA & Problem Solving",
        title: "Find Duplicates in Array",
        description: "Given an array of integers, return a list of duplicate elements.",
        time_limit: 5,
        points: 20,
        difficulty: "Medium",
        base_price: 25,
        exampleInput: "[1, 2, 3, 2, 4, 4]",
        exampleOutput: "[2, 4]",
        testCases: [
            { input: "[1, 2, 3, 2, 4, 4]", expectedOutput: "[2, 4]" },
            { input: "[5, 5, 5, 6]", expectedOutput: "[5]" },
            { input: "[10, 20, 30]", expectedOutput: "[]" }
        ],
        existingCode: {
            python: `def find_duplicates(arr):\n    # Code from here\n\narr = list(map(int, input().strip("[]").split(",")))\nprint(find_duplicates(arr))`,

            cpp: `#include <iostream>\n#include <vector>\nstd::vector<int> findDuplicates(std::vector<int> arr) {\n    // Code from here\n}\n\nint main() {\n    std::vector<int> arr = {1, 2, 3, 2, 4, 4};\n    std::vector<int> result = findDuplicates(arr);\n    for (int n : result) std::cout << n << " "; std::cout << std::endl;\n    return 0;\n}`,

            java: `import java.util.*;\npublic class Main {\n    public static List<Integer> findDuplicates(List<Integer> arr) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        List<Integer> arr = Arrays.asList(1, 2, 3, 2, 4, 4);\n        System.out.println(findDuplicates(arr));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction findDuplicates(arr) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const arr = JSON.parse(input);\n    console.log(findDuplicates(arr));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nint* findDuplicates(int arr[], int n, int* resSize) {\n    // Code from here\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 2, 4, 4};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int resSize = 0;\n    int* result = findDuplicates(arr, n, &resSize);\n    for (int i = 0; i < resSize; i++) printf("%d ", result[i]);\n    printf("\\n");\n    return 0;\n}`
        }
    },

    // Problem 33
    {
        id: "nuin4ku329uknui89rh2hrionsmoqjrh8322",
        category: "DSA & Problem Solving",
        title: "Find Target in Array",
        description: "Given an array of integers and a target number, check if the target number exists in the array.",
        time_limit: 4,
        points: 25,
        difficulty: "Medium",
        base_price: 30,
        exampleInput: "Array: [5, 3, 8, 1, 2], Target: 3",
        exampleOutput: "True",
        testCases: [
            { input: "[5, 3, 8, 1, 2], 3", expectedOutput: "True" },
            { input: "[7, 9, 11], 5", expectedOutput: "False" },
            { input: "[12, 15, 18], 18", expectedOutput: "True" }
        ],
        existingCode: {
            python: `def find_target(arr, target):\n    # Code from here\n\narr = list(map(int, input().strip("[]").split(",")))\ntarget = int(input())\nprint(find_target(arr, target))`,

            cpp: `#include <iostream>\n#include <vector>\nbool findTarget(std::vector<int> arr, int target) {\n    // Code from here\n}\n\nint main() {\n    std::vector<int> arr = {5, 3, 8, 1, 2};\n    int target = 3;\n    std::cout << (findTarget(arr, target) ? "True" : "False") << std::endl;\n    return 0;\n}`,

            java: `import java.util.*;\npublic class Main {\n    public static boolean findTarget(int[] arr, int target) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {5, 3, 8, 1, 2};\n        int target = 3;\n        System.out.println(findTarget(arr, target));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction findTarget(arr, target) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const [arr, target] = input.split(',').map(JSON.parse);\n    console.log(findTarget(arr, target));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nint findTarget(int arr[], int n, int target) {\n    // Code from here\n}\n\nint main() {\n    int arr[] = {5, 3, 8, 1, 2};\n    int target = 3;\n    printf("%s\\n", findTarget(arr, 5, target) ? "True" : "False");\n    return 0;\n}`
        }
    },

    // Problem 34
    {
        id: "UIWODIONOior49nfweionOIEION",
        category: "DSA & Problem Solving",
        title: "Longest Increasing Subsequence",
        description: "Given an array of integers, find the length of the longest increasing subsequence.",
        time_limit: 9,
        points: 40,
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
            python: `def length_of_lis(nums):\n    # Code from here\n\nnums = list(map(int, input().strip("[]").split(",")))\nprint(length_of_lis(nums))`,

            cpp: `#include <iostream>\n#include <vector>\nint lengthOfLIS(std::vector<int>& nums) {\n    // Code from here\n}\n\nint main() {\n    std::vector<int> nums = {10, 9, 2, 5, 3, 7, 101, 18};\n    std::cout << lengthOfLIS(nums) << std::endl;\n    return 0;\n}`,

            java: `import java.util.*;\npublic class Main {\n    public static int lengthOfLIS(int[] nums) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        int[] nums = {10, 9, 2, 5, 3, 7, 101, 18};\n        System.out.println(lengthOfLIS(nums));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction lengthOfLIS(nums) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const nums = JSON.parse(input);\n    console.log(lengthOfLIS(nums));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nint lengthOfLIS(int nums[], int n) {\n    // Code from here\n}\n\nint main() {\n    int nums[] = {10, 9, 2, 5, 3, 7, 101, 18};\n    int n = sizeof(nums) / sizeof(nums[0]);\n    printf("%d\\n", lengthOfLIS(nums, n));\n    return 0;\n}`
        }
    },

    // Problem 35
    {
        id: "dwjib_UBDUIEB3892u3r",
        category: "DSA & Problem Solving",
        title: "Knapsack Problem",
        description: "Given weights and values of N items, determine the maximum value that can be obtained with a knapsack of capacity W.",
        time_limit: 15,
        points: 50,
        difficulty: "Hard",
        base_price: 60,
        exampleInput: "Weights: [1, 2, 3], Values: [10, 15, 40], W = 6",
        exampleOutput: "55",
        testCases: [
            { input: "[1, 2, 3], [10, 15, 40], 6", expectedOutput: "55" },
            { input: "[4, 5, 1], [1, 2, 3], 5", expectedOutput: "3" },
            { input: "[10, 20], [30, 40], 10", expectedOutput: "30" }
        ],
        existingCode: {
            python: `def knapsack(weights, values, W):\n    # Code from here\n\nweights = list(map(int, input().strip("[]").split(",")))\nvalues = list(map(int, input().strip("[]").split(",")))\nW = int(input().strip("W = "))\nprint(knapsack(weights, values, W))`,

            cpp: `#include <iostream>\nint knapsack(int weights[], int values[], int W, int n) {\n    // Code from here\n}\n\nint main() {\n    int weights[] = {1, 2, 3};\n    int values[] = {10, 15, 40};\n    int W = 6;\n    int n = sizeof(weights) / sizeof(weights[0]);\n    std::cout << knapsack(weights, values, W, n) << std::endl;\n    return 0;\n}`,

            java: `import java.util.*;\npublic class Main {\n    public static int knapsack(int[] weights, int[] values, int W) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        int[] weights = {1, 2, 3};\n        int[] values = {10, 15, 40};\n        int W = 6;\n        System.out.println(knapsack(weights, values, W));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction knapsack(weights, values, W) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const [weights, values, W] = input.split(',').map(JSON.parse);\n    console.log(knapsack(weights, values, W));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nint knapsack(int weights[], int values[], int W, int n) {\n    // Code from here\n}\n\nint main() {\n    int weights[] = {1, 2, 3};\n    int values[] = {10, 15, 40};\n    int W = 6;\n    int n = sizeof(weights) / sizeof(weights[0]);\n    printf("%d\\n", knapsack(weights, values, W, n));\n    return 0;\n}`
        }
    },
    // Problem 36
    {
        id: "uibejn32984uibuibewjdsiun_dwuiui23823",
        category: "DSA & Problem Solving",
        title: "Kth Largest Element in Array",
        description: "Given an array, find the Kth largest element in the array.",
        time_limit: 9,
        points: 45,
        difficulty: "Hard",
        base_price: 55,
        exampleInput: "Array: [3, 2, 1, 5, 6, 4], K = 2",
        exampleOutput: "5",
        testCases: [
            { input: "[3, 2, 1, 5, 6, 4], 2", expectedOutput: "5" },
            { input: "[7, 10, 4, 3, 20, 15], 3", expectedOutput: "10" },
            { input: "[1, 2, 3, 4, 5], 1", expectedOutput: "5" }
        ],
        existingCode: {
            python: `def find_kth_largest(nums, k):\n    # Code from here\n\nnums = list(map(int, input().strip("[]").split(",")))\nk = int(input())\nprint(find_kth_largest(nums, k))`,

            cpp: `#include <iostream>\n#include <vector>\nint findKthLargest(std::vector<int>& nums, int k) {\n    // Code from here\n}\n\nint main() {\n    std::vector<int> nums = {3, 2, 1, 5, 6, 4};\n    int k = 2;\n    std::cout << findKthLargest(nums, k) << std::endl;\n    return 0;\n}`,

            java: `import java.util.*;\npublic class Main {\n    public static int findKthLargest(int[] nums, int k) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        int[] nums = {3, 2, 1, 5, 6, 4};\n        int k = 2;\n        System.out.println(findKthLargest(nums, k));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction findKthLargest(nums, k) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const [nums, k] = input.split(',').map(JSON.parse);\n    console.log(findKthLargest(nums, k));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nint findKthLargest(int arr[], int n, int k) {\n    // Code from here\n}\n\nint main() {\n    int arr[] = {3, 2, 1, 5, 6, 4};\n    int k = 2;\n    printf("%d\\n", findKthLargest(arr, 6, k));\n    return 0;\n}`
        }
    },

    // Problem 37
    {
        id: "waiuib489237489iubjbKJBYUBJBYr4uhewu8",
        category: "DSA & Problem Solving",
        title: "Coin Change Combinations",
        description: "Given a set of coins and a total amount, determine the number of ways to make the amount using the coins.",
        time_limit: 10,
        points: 50,
        difficulty: "Hard",
        base_price: 60,
        exampleInput: "Coins: [1, 2, 5], Amount: 5",
        exampleOutput: "4",
        testCases: [
            { input: "[1, 2, 5], 5", expectedOutput: "4" },
            { input: "[2, 3, 7], 7", expectedOutput: "2" },
            { input: "[1, 2], 4", expectedOutput: "3" }
        ],
        existingCode: {
            python: `def coin_change_combinations(coins, amount):\n    # Code from here\n\ncoins = list(map(int, input().strip("[]").split(",")))\namount = int(input())\nprint(coin_change_combinations(coins, amount))`,

            cpp: `#include <iostream>\n#include <vector>\nint coinChangeCombinations(std::vector<int>& coins, int amount) {\n    // Code from here\n}\n\nint main() {\n    std::vector<int> coins = {1, 2, 5};\n    int amount = 5;\n    std::cout << coinChangeCombinations(coins, amount) << std::endl;\n    return 0;\n}`,

            java: `import java.util.*;\npublic class Main {\n    public static int coinChangeCombinations(int[] coins, int amount) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        int[] coins = {1, 2, 5};\n        int amount = 5;\n        System.out.println(coinChangeCombinations(coins, amount));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction coinChangeCombinations(coins, amount) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const [coins, amount] = input.split(',').map(JSON.parse);\n    console.log(coinChangeCombinations(coins, amount));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nint coinChangeCombinations(int coins[], int n, int amount) {\n    // Code from here\n}\n\nint main() {\n    int coins[] = {1, 2, 5};\n    int amount = 5;\n    printf("%d\\n", coinChangeCombinations(coins, 3, amount));\n    return 0;\n}`
        }
    },

    // Problem 38
    {
        id: "momoimoxxwedmiowefijr2827DAFG",
        category: "DSA & Problem Solving",
        title: "Generate Parentheses Combinations",
        description: "Given n pairs of parentheses, generate all combinations of well-formed parentheses.",
        time_limit: 20,
        points: 50,
        difficulty: "Hard",
        base_price: 60,
        exampleInput: "n = 3",
        exampleOutput: '["((()))","(()())","(())()","()(())","()()()"]',
        testCases: [
            { input: "3", expectedOutput: '["((()))","(()())","(())()","()(())","()()()"]' },
            { input: "2", expectedOutput: '["(())","()()"]' },
            { input: "1", expectedOutput: '["()"]' }
        ],
        existingCode: {
            python: `def generate_parentheses(n):\n    # Code from here\n\nn = int(input())\nprint(generate_parentheses(n))`,

            cpp: `#include <iostream>\n#include <vector>\nvoid generateParentheses(int n, std::string s, int left, int right, std::vector<std::string>& result) {\n    // Code from here\n}\n\nint main() {\n    int n = 3;\n    std::vector<std::string> result;\n    generateParentheses(n, "", 0, 0, result);\n    for (const auto& comb : result) std::cout << comb << " "; std::cout << std::endl;\n    return 0;\n}`,

            java: `import java.util.*;\npublic class Main {\n    public List<String> generateParentheses(int n) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        int n = 3;\n        System.out.println(new Main().generateParentheses(n));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction generateParentheses(n) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const n = parseInt(input);\n    console.log(generateParentheses(n));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nvoid generateParentheses(int n, char* s, int pos, int left, int right, char** res, int* count) {\n    // Code from here\n}\n\nint main() {\n    int n = 3;\n    char* res[1000];\n    int count = 0;\n    generateParentheses(n, "", 0, 0, res, &count);\n    for (int i = 0; i < count; i++) printf("%s ", res[i]); printf("\\n");\n    return 0;\n}`
        }
    },

    // Problem 39
    {
        id: "MOIIONwbuasbduwebn902349jsu",
        category: "DSA & Problem Solving",
        title: "K Most Frequent Elements",
        description: "Given a non-empty array of integers, return the k most frequent elements.",
        time_limit: 14,
        points: 45,
        difficulty: "Hard",
        base_price: 55,
        exampleInput: "Array: [1,1,1,2,2,3], k = 2",
        exampleOutput: "[1,2]",
        testCases: [
            { input: "[1,1,1,2,2,3], 2", expectedOutput: "[1,2]" },
            { input: "[4,4,4,5,5,5,6], 1", expectedOutput: "[4,5]" },
            { input: "[3,3,3,1,1,1,2,2], 3", expectedOutput: "[1,2,3]" }
        ],
        existingCode: {
            python: `def k_most_frequent(nums, k):\n    # Code from here\n\nnums = list(map(int, input().strip("[]").split(",")))\nk = int(input())\nprint(k_most_frequent(nums, k))`,

            cpp: `#include <iostream>\n#include <vector>\nstd::vector<int> kMostFrequent(std::vector<int>& nums, int k) {\n    // Code from here\n}\n\nint main() {\n    std::vector<int> nums = {1,1,1,2,2,3};\n    int k = 2;\n    for (int n : kMostFrequent(nums, k)) std::cout << n << " "; std::cout << std::endl;\n    return 0;\n}`,

            java: `import java.util.*;\npublic class Main {\n    public List<Integer> kMostFrequent(int[] nums, int k) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        int[] nums = {1,1,1,2,2,3};\n        int k = 2;\n        System.out.println(new Main().kMostFrequent(nums, k));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction kMostFrequent(nums, k) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const [nums, k] = input.split(',').map(JSON.parse);\n    console.log(kMostFrequent(nums, k));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nint* kMostFrequent(int arr[], int n, int k, int* returnSize) {\n    // Code from here\n}\n\nint main() {\n    int arr[] = {1,1,1,2,2,3};\n    int k = 2;\n    int returnSize;\n    int* res = kMostFrequent(arr, 6, k, &returnSize);\n    for (int i = 0; i < returnSize; i++) printf("%d ", res[i]); printf("\\n");\n    return 0;\n}`
        }
    },

    // Problem 40
    {
        id: "weubewfnhin34ihfurieo8h34uiou904",
        category: "DSA & Problem Solving",
        title: "Sort Names Alphabetically",
        description: "Given a list of names, sort them in alphabetical order.",
        time_limit: 9,
        points: 30,
        difficulty: "Easy",
        base_price: 40,
        exampleInput: '["Johnny", "Virat", "Dhoni"]',
        exampleOutput: '["Dhoni", "Johnny", "Virat"]',
        testCases: [
            { input: '["Johnny", "Virat", "Dhoni"]', expectedOutput: '["Dhoni", "Johnny", "Virat"]' },
            { input: '["Lionel", "Cristiano", "Neymar"]', expectedOutput: '["Cristiano", "Lionel", "Neymar"]' },
            { input: '["Alice", "Bob", "Charlie"]', expectedOutput: '["Alice", "Bob", "Charlie"]' }
        ],
        existingCode: {
            python: `def sort_names(names):\n    # Code from here\n\nnames = input().strip("[]").replace("\\"", "").split(", ")\nprint(sort_names(names))`,

            cpp: `#include <iostream>\n#include <vector>\nstd::vector<std::string> sortNames(std::vector<std::string>& names) {\n    // Code from here\n}\n\nint main() {\n    std::vector<std::string> names = {"Johnny", "Virat", "Dhoni"};\n    for (const auto& name : sortNames(names)) std::cout << name << " "; std::cout << std::endl;\n    return 0;\n}`,

            java: `import java.util.*;\npublic class Main {\n    public List<String> sortNames(List<String> names) {\n        // Code from here\n    }\n\n    public static void main(String[] args) {\n        List<String> names = Arrays.asList("Johnny", "Virat", "Dhoni");\n        System.out.println(new Main().sortNames(names));\n    }\n}`,

            javascript: `const readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n\nfunction sortNames(names) {\n    // Code from here\n}\n\nrl.question('', (input) => {\n    const names = JSON.parse(input);\n    console.log(sortNames(names));\n    rl.close();\n});`,

            c: `#include <stdio.h>\nvoid sortNames(char* names[], int n) {\n    // Code from here\n}\n\nint main() {\n    char* names[] = {"Johnny", "Virat", "Dhoni"};\n    int n = sizeof(names) / sizeof(names[0]);\n    sortNames(names, n);\n    for (int i = 0; i < n; i++) printf("%s ", names[i]); printf("\\n");\n    return 0;\n}`
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
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT * FROM employees;",
                expectedRowCount: 10,
                expectedData: [
                    { id: 1, name: 'Alice Johnson', department: 'Sales', salary: 60000, hire_date: '2015-06-20', job_title: 'Manager', manager_id: null, years_experience: 10 },
                    { id: 2, name: 'Adam Smith', department: 'IT', salary: 50000, hire_date: '2018-03-15', job_title: 'Developer', manager_id: 1, years_experience: 5 },
                    { id: 3, name: 'Charlie Brown', department: 'HR', salary: 55000, hire_date: '2012-11-03', job_title: 'Analyst', manager_id: 1, years_experience: 8 },
                    { id: 4, name: 'Daisy Carter', department: 'Finance', salary: 75000, hire_date: '2010-09-17', job_title: 'Executive', manager_id: null, years_experience: 15 },
                    { id: 5, name: 'Edward Davis', department: 'Marketing', salary: 62000, hire_date: '2017-12-11', job_title: 'Consultant', manager_id: 2, years_experience: 7 },
                    { id: 6, name: 'Fiona Green', department: 'Sales', salary: 40000, hire_date: '2020-01-10', job_title: 'Analyst', manager_id: 1, years_experience: 3 },
                    { id: 7, name: 'George Harris', department: 'IT', salary: 80000, hire_date: '2013-07-22', job_title: 'Developer', manager_id: null, years_experience: 12 },
                    { id: 8, name: 'Hannah Lee', department: 'HR', salary: 45000, hire_date: '2019-05-23', job_title: 'Consultant', manager_id: 3, years_experience: 4 },
                    { id: 9, name: 'Ivan Young', department: 'Finance', salary: 70000, hire_date: '2016-09-29', job_title: 'Manager', manager_id: 4, years_experience: 10 },
                    { id: 10, name: 'Julia Thomas', department: 'Marketing', salary: 54000, hire_date: '2014-04-05', job_title: 'Executive', manager_id: 5, years_experience: 6 }
                ]
            }
        ]
    },

    // Problem 2
    {
        id: "SQ2-2ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 20,
        points: 10,
        time_limit: 2,
        title: "Select only name column",
        description: "Select only the name column from the employees table.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT name FROM employees;",
                expectedRowCount: 10,
                expectedData: [
                    { name: 'Alice Johnson' },
                    { name: 'Adam Smith' },
                    { name: 'Charlie Brown' },
                    { name: 'Daisy Carter' },
                    { name: 'Edward Davis' },
                    { name: 'Fiona Green' },
                    { name: 'George Harris' },
                    { name: 'Hannah Lee' },
                    { name: 'Ivan Young' },
                    { name: 'Julia Thomas' }
                ]
            }
        ]
    },

    // Problem 3
    {
        id: "SQ3-3ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 25,
        points: 10,
        time_limit: 2,
        title: "Count employees",
        description: "Find the number of employees in the employees table.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT COUNT(*) AS employee_count FROM employees;",
                expectedRowCount: 1,
                expectedData: [
                    { employee_count: 10 }
                ]
            }
        ]
    },

    // Problem 4
    {
        id: "SQ4-4ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 25,
        points: 15,
        time_limit: 2,
        title: "Get distinct departments",
        description: "Get all distinct values in the department column from employees.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT DISTINCT department FROM employees;",
                expectedRowCount: 5,
                expectedData: [
                    { department: 'Sales' },
                    { department: 'IT' },
                    { department: 'HR' },
                    { department: 'Finance' },
                    { department: 'Marketing' }
                ]
            }
        ]
    },

    // Problem 5
    {
        id: "SQ5-5ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 30,
        points: 15,
        time_limit: 2,
        title: "Salary greater than 50000",
        description: "Retrieve all employees whose salary is greater than 50000.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT * FROM employees WHERE salary > 50000;",
                expectedRowCount: 7,
                expectedData: [
                    { id: 1, name: 'Alice Johnson', department: 'Sales', salary: 60000, hire_date: '2015-06-20', job_title: 'Manager', manager_id: null, years_experience: 10 },
                    { id: 3, name: 'Charlie Brown', department: 'HR', salary: 55000, hire_date: '2012-11-03', job_title: 'Analyst', manager_id: 1, years_experience: 8 },
                    { id: 4, name: 'Daisy Carter', department: 'Finance', salary: 75000, hire_date: '2010-09-17', job_title: 'Executive', manager_id: null, years_experience: 15 },
                    { id: 5, name: 'Edward Davis', department: 'Marketing', salary: 62000, hire_date: '2017-12-11', job_title: 'Consultant', manager_id: 2, years_experience: 7 },
                    { id: 7, name: 'George Harris', department: 'IT', salary: 80000, hire_date: '2013-07-22', job_title: 'Developer', manager_id: null, years_experience: 12 },
                    { id: 9, name: 'Ivan Young', department: 'Finance', salary: 70000, hire_date: '2016-09-29', job_title: 'Manager', manager_id: 4, years_experience: 10 },
                    { id: 10, name: 'Julia Thomas', department: 'Marketing', salary: 54000, hire_date: '2014-04-05', job_title: 'Executive', manager_id: 5, years_experience: 6 }
                ]
            }
        ]
    },
    // Problem 6
    {
        id: "SQ6-6ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 30,
        points: 15,
        time_limit: 3,
        title: "Count employees per department",
        description: "Count the number of employees in each department.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT department, COUNT(*) AS employee_count FROM employees GROUP BY department;",
                expectedRowCount: 5,
                expectedData: [
                    { department: 'Sales', employee_count: 2 },
                    { department: 'IT', employee_count: 2 },
                    { department: 'HR', employee_count: 2 },
                    { department: 'Finance', employee_count: 2 },
                    { department: 'Marketing', employee_count: 2 }
                ]
            }
        ]
    },

    // Problem 7
    {
        id: "SQ7-7ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 30,
        points: 15,
        time_limit: 2,
        title: "Find minimum salary",
        description: "Find the minimum salary from the employees table.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT MIN(salary) AS min_salary FROM employees;",
                expectedRowCount: 1,
                expectedData: [
                    { min_salary: 40000 }
                ]
            }
        ]
    },

    // Problem 8
    {
        id: "SQ8-8ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 35,
        points: 20,
        time_limit: 3,
        title: "Name starts with 'A'",
        description: "Retrieve employee records where the name starts with 'A'.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT * FROM employees WHERE name LIKE 'A%';",
                expectedRowCount: 2,
                expectedData: [
                    { id: 1, name: 'Alice Johnson', department: 'Sales', salary: 60000, hire_date: '2015-06-20', job_title: 'Manager', manager_id: null, years_experience: 10 },
                    { id: 2, name: 'Adam Smith', department: 'IT', salary: 50000, hire_date: '2018-03-15', job_title: 'Developer', manager_id: 1, years_experience: 5 }
                ]
            }
        ]
    },

    // Problem 9
    {
        id: "SQ9-9ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 35,
        points: 15,
        time_limit: 2,
        title: "Average salary",
        description: "Find the average salary of employees.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT AVG(salary) AS avg_salary FROM employees;",
                expectedRowCount: 1,
                expectedData: [
                    { avg_salary: 59600 }
                ]
            }
        ]
    },

    // Problem 10
    {
        id: "SQ10-0ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 40,
        points: 15,
        time_limit: 2,
        title: "Employees in Sales department",
        description: "Select all employees who work in the Sales department.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT * FROM employees WHERE department = 'Sales';",
                expectedRowCount: 2,
                expectedData: [
                    { id: 1, name: 'Alice Johnson', department: 'Sales', salary: 60000, hire_date: '2015-06-20', job_title: 'Manager', manager_id: null, years_experience: 10 },
                    { id: 6, name: 'Fiona Green', department: 'Sales', salary: 40000, hire_date: '2020-01-10', job_title: 'Analyst', manager_id: 1, years_experience: 3 }
                ]
            }
        ]
    },

    // Problem 11
    {
        id: "SQ11-1ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 40,
        points: 20,
        time_limit: 2,
        title: "Employees hired before 2010",
        description: "Retrieve all employees who were hired before 2010.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT * FROM employees WHERE hire_date < '2010-01-01';",
                expectedRowCount: 1,
                expectedData: [
                    { id: 4, name: 'Daisy Carter', department: 'Finance', salary: 75000, hire_date: '2010-09-17', job_title: 'Executive', manager_id: null, years_experience: 15 }
                ]
            }
        ]
    },

    // Problem 12
    {
        id: "SQ12-2ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 40,
        points: 20,
        time_limit: 2,
        title: "Departments with more than 5 employees",
        description: "List all departments with more than 5 employees.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT department FROM employees GROUP BY department HAVING COUNT(*) > 5;",
                expectedRowCount: 0,
                expectedData: [] // No department has more than 5 employees in the mock data
            }
        ]
    },

    // Problem 13
    {
        id: "SQ13-3ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 40,
        points: 20,
        time_limit: 3,
        title: "Maximum salary per department",
        description: "Display the maximum salary in each department.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT department, MAX(salary) AS max_salary FROM employees GROUP BY department;",
                expectedRowCount: 5,
                expectedData: [
                    { department: 'Sales', max_salary: 60000 },
                    { department: 'IT', max_salary: 80000 },
                    { department: 'HR', max_salary: 55000 },
                    { department: 'Finance', max_salary: 75000 },
                    { department: 'Marketing', max_salary: 62000 }
                ]
            }
        ]
    },

    // Problem 14
    {
        id: "SQ14-4ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 45,
        points: 25,
        time_limit: 4,
        title: "Employees with name containing 'John'",
        description: "Find employees whose name contains the substring 'John'.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT * FROM employees WHERE name LIKE '%John%';",
                expectedRowCount: 1,
                expectedData: [
                    { id: 1, name: 'Alice Johnson', department: 'Sales', salary: 60000, hire_date: '2015-06-20', job_title: 'Manager', manager_id: null, years_experience: 10 }
                ]
            }
        ]
    },

    // Problem 15
    {
        id: "SQ15-5ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 45,
        points: 20,
        time_limit: 4,
        title: "Employees sorted by salary (desc)",
        description: "Retrieve records sorted by the salary column in descending order.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT * FROM employees ORDER BY salary DESC;",
                expectedRowCount: 10,
                expectedData: [
                    { id: 7, name: 'George Harris', department: 'IT', salary: 80000, hire_date: '2013-07-22', job_title: 'Developer', manager_id: null, years_experience: 12 },
                    { id: 4, name: 'Daisy Carter', department: 'Finance', salary: 75000, hire_date: '2010-09-17', job_title: 'Executive', manager_id: null, years_experience: 15 },
                    { id: 1, name: 'Alice Johnson', department: 'Sales', salary: 60000, hire_date: '2015-06-20', job_title: 'Manager', manager_id: null, years_experience: 10 },
                    { id: 5, name: 'Edward Davis', department: 'Marketing', salary: 62000, hire_date: '2017-12-11', job_title: 'Consultant', manager_id: 2, years_experience: 7 },
                    { id: 9, name: 'Ivan Young', department: 'Finance', salary: 70000, hire_date: '2016-09-29', job_title: 'Manager', manager_id: 4, years_experience: 10 },
                    { id: 10, name: 'Julia Thomas', department: 'Marketing', salary: 54000, hire_date: '2014-04-05', job_title: 'Executive', manager_id: 5, years_experience: 6 },
                    { id: 3, name: 'Charlie Brown', department: 'HR', salary: 55000, hire_date: '2012-11-03', job_title: 'Analyst', manager_id: 1, years_experience: 8 },
                    { id: 2, name: 'Adam Smith', department: 'IT', salary: 50000, hire_date: '2018-03-15', job_title: 'Developer', manager_id: 1, years_experience: 5 },
                    { id: 6, name: 'Fiona Green', department: 'Sales', salary: 40000, hire_date: '2020-01-10', job_title: 'Analyst', manager_id: 1, years_experience: 3 },
                    { id: 8, name: 'Hannah Lee', department: 'HR', salary: 45000, hire_date: '2019-05-23', job_title: 'Consultant', manager_id: 3, years_experience: 4 }
                ]
            }
        ]
    },
    
    // Problem 16
    {
        id: "SQ16-6ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 45,
        points: 25,
        time_limit: 4,
        title: "Top 10 highest-paid employees",
        description: "Get the top 10 highest-paid employees.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT * FROM employees ORDER BY salary DESC LIMIT 10;",
                expectedRowCount: 10,
                expectedData: [
                    { id: 7, name: 'George Harris', department: 'IT', salary: 80000, hire_date: '2013-07-22', job_title: 'Developer', manager_id: null, years_experience: 12 },
                    { id: 4, name: 'Daisy Carter', department: 'Finance', salary: 75000, hire_date: '2010-09-17', job_title: 'Executive', manager_id: null, years_experience: 15 },
                    { id: 1, name: 'Alice Johnson', department: 'Sales', salary: 60000, hire_date: '2015-06-20', job_title: 'Manager', manager_id: null, years_experience: 10 },
                    { id: 5, name: 'Edward Davis', department: 'Marketing', salary: 62000, hire_date: '2017-12-11', job_title: 'Consultant', manager_id: 2, years_experience: 7 },
                    { id: 9, name: 'Ivan Young', department: 'Finance', salary: 70000, hire_date: '2016-09-29', job_title: 'Manager', manager_id: 4, years_experience: 10 },
                    { id: 10, name: 'Julia Thomas', department: 'Marketing', salary: 54000, hire_date: '2014-04-05', job_title: 'Executive', manager_id: 5, years_experience: 6 },
                    { id: 3, name: 'Charlie Brown', department: 'HR', salary: 55000, hire_date: '2012-11-03', job_title: 'Analyst', manager_id: 1, years_experience: 8 },
                    { id: 2, name: 'Adam Smith', department: 'IT', salary: 50000, hire_date: '2018-03-15', job_title: 'Developer', manager_id: 1, years_experience: 5 },
                    { id: 6, name: 'Fiona Green', department: 'Sales', salary: 40000, hire_date: '2020-01-10', job_title: 'Analyst', manager_id: 1, years_experience: 3 },
                    { id: 8, name: 'Hannah Lee', department: 'HR', salary: 45000, hire_date: '2019-05-23', job_title: 'Consultant', manager_id: 3, years_experience: 4 }
                ]
            }
        ]
    },

    // Problem 17
    {
        id: "SQ17-7ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 45,
        points: 25,
        time_limit: 4,
        title: "Employees with salaries between 40000 and 60000",
        description: "Count the number of employees with salaries between 40000 and 60000.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT COUNT(*) AS count FROM employees WHERE salary BETWEEN 40000 AND 60000;",
                expectedRowCount: 1,
                expectedData: [
                    { count: 7 }
                ]
            }
        ]
    },

    // Problem 18
    {
        id: "SQ18-8ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 45,
        points: 25,
        time_limit: 5,
        title: "Employees without a department",
        description: "Retrieve employee records without a department value.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT * FROM employees WHERE department IS NULL;",
                expectedRowCount: 0,
                expectedData: [] // All employees in mock data have a department value
            }
        ]
    },

    // Problem 19
    {
        id: "SQ19-9ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 50,
        points: 25,
        time_limit: 5,
        title: "Employees and department names",
        description: "Display employees and their department names, ordered by department.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT * FROM employees ORDER BY department;",
                expectedRowCount: 10,
                expectedData: [
                    { id: 2, name: 'Adam Smith', department: 'IT', salary: 50000, hire_date: '2018-03-15', job_title: 'Developer', manager_id: 1, years_experience: 5 },
                    { id: 7, name: 'George Harris', department: 'IT', salary: 80000, hire_date: '2013-07-22', job_title: 'Developer', manager_id: null, years_experience: 12 },
                    { id: 3, name: 'Charlie Brown', department: 'HR', salary: 55000, hire_date: '2012-11-03', job_title: 'Analyst', manager_id: 1, years_experience: 8 },
                    { id: 8, name: 'Hannah Lee', department: 'HR', salary: 45000, hire_date: '2019-05-23', job_title: 'Consultant', manager_id: 3, years_experience: 4 },
                    { id: 4, name: 'Daisy Carter', department: 'Finance', salary: 75000, hire_date: '2010-09-17', job_title: 'Executive', manager_id: null, years_experience: 15 },
                    { id: 9, name: 'Ivan Young', department: 'Finance', salary: 70000, hire_date: '2016-09-29', job_title: 'Manager', manager_id: 4, years_experience: 10 },
                    { id: 1, name: 'Alice Johnson', department: 'Sales', salary: 60000, hire_date: '2015-06-20', job_title: 'Manager', manager_id: null, years_experience: 10 },
                    { id: 6, name: 'Fiona Green', department: 'Sales', salary: 40000, hire_date: '2020-01-10', job_title: 'Analyst', manager_id: 1, years_experience: 3 },
                    { id: 5, name: 'Edward Davis', department: 'Marketing', salary: 62000, hire_date: '2017-12-11', job_title: 'Consultant', manager_id: 2, years_experience: 7 },
                    { id: 10, name: 'Julia Thomas', department: 'Marketing', salary: 54000, hire_date: '2014-04-05', job_title: 'Executive', manager_id: 5, years_experience: 6 }
                ]
            }
        ]
    },

    // Problem 20
    {
        id: "SQ20-0ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Easy",
        base_price: 55,
        points: 30,
        time_limit: 5,
        title: "Employees who joined in the last 5 years",
        description: "Find all employees who joined in the last 5 years.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT * FROM employees WHERE hire_date >= DATE_SUB(CURDATE(), INTERVAL 5 YEAR);",
                expectedRowCount: 4,
                expectedData: [
                    { id: 6, name: 'Fiona Green', department: 'Sales', salary: 40000, hire_date: '2020-01-10', job_title: 'Analyst', manager_id: 1, years_experience: 3 },
                    { id: 8, name: 'Hannah Lee', department: 'HR', salary: 45000, hire_date: '2019-05-23', job_title: 'Consultant', manager_id: 3, years_experience: 4 },
                    { id: 2, name: 'Adam Smith', department: 'IT', salary: 50000, hire_date: '2018-03-15', job_title: 'Developer', manager_id: 1, years_experience: 5 },
                    { id: 5, name: 'Edward Davis', department: 'Marketing', salary: 62000, hire_date: '2017-12-11', job_title: 'Consultant', manager_id: 2, years_experience: 7 }
                ]
            }
        ]
    },

    // Problem 21
    {
        id: "SQ21-1ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Medium",
        base_price: 60,
        points: 30,
        time_limit: 5,
        title: "Highest salary in each department",
        description: "Find the employee with the highest salary in each department.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT department, name, salary FROM employees WHERE (department, salary) IN (SELECT department, MAX(salary) FROM employees GROUP BY department);",
                expectedRowCount: 5,
                expectedData: [
                    { department: 'IT', name: 'George Harris', salary: 80000 },
                    { department: 'Finance', name: 'Daisy Carter', salary: 75000 },
                    { department: 'Marketing', name: 'Edward Davis', salary: 62000 },
                    { department: 'Sales', name: 'Alice Johnson', salary: 60000 },
                    { department: 'HR', name: 'Charlie Brown', salary: 55000 }
                ]
            }
        ]
    },

    // Problem 22
    {
        id: "SQ22-2ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Medium",
        base_price: 60,
        points: 30,
        time_limit: 5,
        title: "Departments with average salary above 50000",
        description: "Retrieve departments with an average salary above 50000.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT department FROM employees GROUP BY department HAVING AVG(salary) > 50000;",
                expectedRowCount: 4,
                expectedData: [
                    { department: 'Sales' },
                    { department: 'Finance' },
                    { department: 'Marketing' },
                    { department: 'IT' }
                ]
            }
        ]
    },

    // Problem 23
    {
        id: "SQ23-3ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Medium",
        base_price: 65,
        points: 30,
        time_limit: 6,
        title: "Employees with more than 10 years experience",
        description: "Find employees who have worked for more than 10 years.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT * FROM employees WHERE years_experience > 10;",
                expectedRowCount: 3,
                expectedData: [
                    { id: 4, name: 'Daisy Carter', department: 'Finance', salary: 75000, hire_date: '2010-09-17', job_title: 'Executive', manager_id: null, years_experience: 15 },
                    { id: 7, name: 'George Harris', department: 'IT', salary: 80000, hire_date: '2013-07-22', job_title: 'Developer', manager_id: null, years_experience: 12 },
                    { id: 1, name: 'Alice Johnson', department: 'Sales', salary: 60000, hire_date: '2015-06-20', job_title: 'Manager', manager_id: null, years_experience: 10 }
                ]
            }
        ]
    },

    // Problem 24
    {
        id: "SQ24-4ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Medium",
        base_price: 65,
        points: 30,
        time_limit: 6,
        title: "Employees with same job title in multiple departments",
        description: "List employees with the same job title in multiple departments.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT job_title FROM employees GROUP BY job_title HAVING COUNT(DISTINCT department) > 1;",
                expectedRowCount: 1,
                expectedData: [
                    { job_title: 'Consultant' }
                ]
            }
        ]
    },

    // Problem 25
    {
        id: "SQ25-5ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Medium",
        base_price: 65,
        points: 35,
        time_limit: 6,
        title: "Total salary expense for each department",
        description: "Calculate the total salary expense for each department.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT department, SUM(salary) AS total_salary FROM employees GROUP BY department;",
                expectedRowCount: 5,
                expectedData: [
                    { department: 'Sales', total_salary: 100000 },
                    { department: 'Finance', total_salary: 145000 },
                    { department: 'Marketing', total_salary: 116000 },
                    { department: 'IT', total_salary: 130000 },
                    { department: 'HR', total_salary: 100000 }
                ]
            }
        ]
    },

    // Problem 26
    {
        id: "SQ26-6ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Medium",
        base_price: 70,
        points: 35,
        time_limit: 7,
        title: "Employees with more than 2 subordinates",
        description: "Retrieve employees with more than 2 subordinates.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT manager_id, COUNT(*) AS subordinate_count FROM employees GROUP BY manager_id HAVING subordinate_count > 2;",
                expectedRowCount: 1,
                expectedData: [
                    { manager_id: 1, subordinate_count: 3 }
                ]
            }
        ]
    },

    // Problem 27
    {
        id: "SQ27-7ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Medium",
        base_price: 70,
        points: 35,
        time_limit: 7,
        title: "Departments with employee earning above 70000",
        description: "Find departments with at least one employee earning above 70000.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT DISTINCT department FROM employees WHERE salary > 70000;",
                expectedRowCount: 2,
                expectedData: [
                    { department: 'Finance' },
                    { department: 'IT' }
                ]
            }
        ]
    },

    // Problem 28
    {
        id: "SQ28-8ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Medium",
        base_price: 70,
        points: 35,
        time_limit: 7,
        title: "Employees in multiple departments",
        description: "Retrieve employees who work in multiple departments.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT name FROM employees WHERE department IN (SELECT DISTINCT department FROM employees GROUP BY name HAVING COUNT(DISTINCT department) > 1);",
                expectedRowCount: 0,
                expectedData: [] // In this mock data, no employee works in multiple departments
            }
        ]
    },

    // Problem 29
    {
        id: "SQ29-9ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Medium",
        base_price: 75,
        points: 35,
        time_limit: 7,
        title: "Managers and their employee counts",
        description: "Show all managers and the number of employees they manage.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT manager_id, COUNT(*) AS num_employees FROM employees WHERE manager_id IS NOT NULL GROUP BY manager_id;",
                expectedRowCount: 3,
                expectedData: [
                    { manager_id: 1, num_employees: 3 },
                    { manager_id: 3, num_employees: 1 },
                    { manager_id: 4, num_employees: 1 }
                ]
            }
        ]
    },

    // Problem 30
    {
        id: "SQ30-0ASFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Medium",
        base_price: 75,
        points: 40,
        time_limit: 7,
        title: "Average salary by years of experience",
        description: "Find the average salary of employees grouped by years of experience.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT years_experience, AVG(salary) AS avg_salary FROM employees GROUP BY years_experience;",
                expectedRowCount: 7,
                expectedData: [
                    { years_experience: 3, avg_salary: 40000 },
                    { years_experience: 4, avg_salary: 45000 },
                    { years_experience: 5, avg_salary: 50000 },
                    { years_experience: 6, avg_salary: 54000 },
                    { years_experience: 7, avg_salary: 62000 },
                    { years_experience: 8, avg_salary: 55000 },
                    { years_experience: 10, avg_salary: 65000 }
                ]
            }
        ]
    },
    // Problem 31
    {
        id: "SQ31-1BSFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Medium",
        base_price: 75,
        points: 40,
        time_limit: 7,
        title: "Employees with NULL address",
        description: "Retrieve all employee records with missing or NULL values in the address column.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT * FROM employees WHERE address IS NULL;",
                expectedRowCount: 0,
                expectedData: [] // No NULL values in the address column in the mock data
            }
        ]
    },

    // Problem 32
    {
        id: "SQ32-2BSFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Medium",
        base_price: 75,
        points: 35,
        time_limit: 7,
        title: "Alphabetical order by department",
        description: "List all employees in alphabetical order with their department names.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT name, department FROM employees ORDER BY department, name;",
                expectedRowCount: 10,
                expectedData: [
                    { name: 'Adam Smith', department: 'IT' },
                    { name: 'George Harris', department: 'IT' },
                    { name: 'Ivan Young', department: 'Finance' },
                    { name: 'Daisy Carter', department: 'Finance' },
                    { name: 'Alice Johnson', department: 'Sales' },
                    { name: 'Fiona Green', department: 'Sales' },
                    { name: 'Charlie Brown', department: 'HR' },
                    { name: 'Hannah Lee', department: 'HR' },
                    { name: 'Edward Davis', department: 'Marketing' },
                    { name: 'Julia Thomas', department: 'Marketing' }
                ]
            }
        ]
    },

    // Problem 33
    {
        id: "SQ33-3BSFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Medium",
        base_price: 80,
        points: 40,
        time_limit: 8,
        title: "Employees and their managers",
        description: "Show employees and their manager names.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: `SELECT e.name AS employee_name, m.name AS manager_name
                        FROM employees e
                        LEFT JOIN employees m ON e.manager_id = m.id;`,
                expectedRowCount: 10,
                expectedData: [
                    { employee_name: 'Alice Johnson', manager_name: null },
                    { employee_name: 'Adam Smith', manager_name: 'Alice Johnson' },
                    { employee_name: 'Charlie Brown', manager_name: 'Alice Johnson' },
                    { employee_name: 'Daisy Carter', manager_name: null },
                    { employee_name: 'Edward Davis', manager_name: 'Adam Smith' },
                    { employee_name: 'Fiona Green', manager_name: 'Alice Johnson' },
                    { employee_name: 'George Harris', manager_name: null },
                    { employee_name: 'Hannah Lee', manager_name: 'Charlie Brown' },
                    { employee_name: 'Ivan Young', manager_name: 'Daisy Carter' },
                    { employee_name: 'Julia Thomas', manager_name: 'Edward Davis' }
                ]
            }
        ]
    },

    // Problem 34
    {
        id: "SQ34-4BSFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Hard",
        base_price: 80,
        points: 45,
        time_limit: 9,
        title: "Average salary by manager hierarchy",
        description: "Find the average salary of employees reporting directly or indirectly to a specific manager.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT AVG(salary) AS avg_salary FROM employees WHERE manager_id = 1 OR id = 1;",
                expectedRowCount: 1,
                expectedData: [
                    { avg_salary: 51250 }
                ]
            }
        ]
    },

    // Problem 35
    {
        id: "SQ35-5BSFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Hard",
        base_price: 85,
        points: 45,
        time_limit: 9,
        title: "Employees with same last name in different departments",
        description: "Retrieve employees who have the same last name but work in different departments.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT name FROM employees WHERE name LIKE '%Smith%' GROUP BY name HAVING COUNT(DISTINCT department) > 1;",
                expectedRowCount: 0,
                expectedData: [] 
            }
        ]
    },

    // Problem 36
    {
        id: "SQ36-6BSFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Hard",
        base_price: 85,
        points: 50,
        time_limit: 9,
        title: "Salary above average by department",
        description: "List employees who have a salary higher than the average salary in their department.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: `SELECT name, salary, department FROM employees e 
                        WHERE salary > (SELECT AVG(salary) FROM employees WHERE department = e.department);`,
                expectedRowCount: 5,
                expectedData: [
                    { name: 'Alice Johnson', salary: 60000, department: 'Sales' },
                    { name: 'Edward Davis', salary: 62000, department: 'Marketing' },
                    { name: 'George Harris', salary: 80000, department: 'IT' },
                    { name: 'Daisy Carter', salary: 75000, department: 'Finance' },
                    { name: 'Charlie Brown', salary: 55000, department: 'HR' }
                ]
            }
        ]
    },

    // Problem 37
    {
        id: "SQ37-7BSFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Hard",
        base_price: 90,
        points: 60,
        time_limit: 9,
        title: "Maximum experience by department",
        description: "Show employees with the maximum years of experience in each department.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: `SELECT department, name, years_experience FROM employees WHERE (department, years_experience) IN 
                        (SELECT department, MAX(years_experience) FROM employees GROUP BY department);`,
                expectedRowCount: 5,
                expectedData: [
                    { department: 'Sales', name: 'Alice Johnson', years_experience: 10 },
                    { department: 'Finance', name: 'Daisy Carter', years_experience: 15 },
                    { department: 'Marketing', name: 'Edward Davis', years_experience: 7 },
                    { department: 'IT', name: 'George Harris', years_experience: 12 },
                    { department: 'HR', name: 'Charlie Brown', years_experience: 8 }
                ]
            }
        ]
    },

    // Problem 38
    {
        id: "SQ38-8BSFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Hard",
        base_price: 95,
        points: 70,
        time_limit: 10,
        title: "Total salary in departments with more than 5 people",
        description: "Retrieve the department name and total salary expenditure in departments with more than 5 people.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: "SELECT department, SUM(salary) AS total_salary FROM employees GROUP BY department HAVING COUNT(*) > 5;",
                expectedRowCount: 0,
                expectedData: [] // No departments with more than 5 people in mock data
            }
        ]
    },

    // Problem 39
    {
        id: "SQ39-9BSFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Hard",
        base_price: 95,
        points: 80,
        time_limit: 10,
        title: "Percentage of employees with salary above 50000",
        description: "Find the percentage of employees in each department with a salary above 50000.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: `SELECT department, 
                        ROUND((SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) * 100.0) / COUNT(*), 2) AS percentage_above_50000 
                        FROM employees GROUP BY department;`,
                expectedRowCount: 5,
                expectedData: [
                    { department: 'Sales', percentage_above_50000: 50.00 },
                    { department: 'Finance', percentage_above_50000: 100.00 },
                    { department: 'Marketing', percentage_above_50000: 100.00 },
                    { department: 'IT', percentage_above_50000: 100.00 },
                    { department: 'HR', percentage_above_50000: 50.00 }
                ]
            }
        ]
    },

    // Problem 40
    {
        id: "SQ40-0BSFJLS0KCLNXJ",
        category: "SQL",
        difficulty: "Hard",
        base_price: 100,
        points: 90,
        time_limit: 10,
        title: "Top 10% salary within each department",
        description: "Retrieve employees whose salaries are within the top 10% in their department.",
        existingCode: "-- Write your SQL query here",
        testCases: [
            {
                query: `SELECT department, name, salary FROM employees WHERE salary >= 
                        (SELECT PERCENTILE_CONT(0.9) WITHIN GROUP (ORDER BY salary) FROM employees AS e2 WHERE e2.department = employees.department);`,
                expectedRowCount: 5,
                expectedData: [
                    { department: 'Sales', name: 'Alice Johnson', salary: 60000 },
                    { department: 'Finance', name: 'Daisy Carter', salary: 75000 },
                    { department: 'Marketing', name: 'Edward Davis', salary: 62000 },
                    { department: 'IT', name: 'George Harris', salary: 80000 },
                    { department: 'HR', name: 'Charlie Brown', salary: 55000 }
                ]
            }
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