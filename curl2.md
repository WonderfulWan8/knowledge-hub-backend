```bash
curl -s -X POST http://localhost:3000/documents/upload/parse \
  -F 'file=@./梁多强_Agent开发_17601230573.docx' \
  -F 'authorId=10001' \
  -F 'createBy=10001' | jq
```

```bash
DOC_ID='359204043026862080'
curl -s "http://localhost:3000/documents/${DOC_ID}" | jq
```
