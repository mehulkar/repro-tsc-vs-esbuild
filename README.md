# typechecking vs build

```bash
# passes even though this package imports a dep that it doesn't declare
pnpm -F @internal/broken-package typecheck

# fails to bundle
pnpm -F app-a build # fails to bundle
```
