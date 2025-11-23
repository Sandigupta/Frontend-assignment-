import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Mock AI Generation Logic
const generateCode = (prompt, language) => {
    const templates = {
        javascript: `// JavaScript solution for: \${prompt}\n\nfunction solution() {\n  console.log("Hello from Code Copilot!");\n  // TODO: Implement logic here\n}\n\nsolution();`,
        python: `# Python solution for: \${prompt}\n\ndef solution():\n    print("Hello from Code Copilot!")\n    # TODO: Implement logic here\n\nif __name__ == "__main__":\n    solution()`,
        java: `// Java solution for: \${prompt}\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello from Code Copilot!");\n        // TODO: Implement logic here\n    }\n}`,
        c: `// C solution for: \${prompt}\n\n#include <stdio.h>\n\nint main() {\n    printf("Hello from Code Copilot!\\n");\n    // TODO: Implement logic here\n    return 0;\n}`,
        cpp: `// C++ solution for: \${prompt}\n\n#include <iostream>\n\nint main() {\n    std::cout << "Hello from Code Copilot!" << std::endl;\n    // TODO: Implement logic here\n    return 0;\n}`,
        typescript: `// TypeScript solution for: \${prompt}\n\nfunction solution(): void {\n  console.log("Hello from Code Copilot!");\n  // TODO: Implement logic here\n}\n\nsolution();`
    };

    const defaultTemplate = `// Code solution for: \${prompt}\n// Language: \${language}\n\n// TODO: Implement logic here`;

    let code = templates[language.toLowerCase()] || defaultTemplate;

    // Simulate some AI variation
    if (prompt.toLowerCase().includes("loop")) {
        if (language === 'python') code += `\n\n    for i in range(10):\n        print(i)`;
        else if (language === 'javascript') code += `\n\n  for (let i = 0; i < 10; i++) {\n    console.log(i);\n  }`;
    }

    return code;
};

app.post('/api/generate', (req, res) => {
    const { prompt, language } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    const lang = language || 'javascript';

    // Simulate delay
    const delay = Math.floor(Math.random() * 1000) + 1000; // 1-2s delay

    setTimeout(() => {
        const code = generateCode(prompt, lang);
        res.json({
            code,
            language: lang,
            timestamp: Date.now()
        });
    }, delay);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
