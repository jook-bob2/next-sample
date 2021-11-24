# Getting Started

First, run the development or production server:

```bash
1. yarn 명령어로 node package 설치
2. yarn dev (Development 모드) 또는 yarn prod (Production 모드)
```

Development => [http://localhost:5000](http://localhost:5000)

Production => [http://localhost:4000](http://localhost:4000)

## vs-code settings.json

```bash
vs-code에서 prettier와 eslint Extension을 설치 후 아래 내용을 settings.json 파일에 붙여 넣으세요.
```

```javascript
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"editor.formatOnSave": true,
"eslint.alwaysShowStatus": true,
"javascript.format.enable": false,
"eslint.format.enable": true,
```

## next-sample
