# typechecking vs build

```bash
corepack enable # or get pnpm 8 however (not sure version matters)

pnpm i

# passes even though this package imports a dep that it doesn't declare
pnpm -F @internal/broken-package typecheck

# fails to bundle
pnpm -F app-a build # fails to bundle
```
