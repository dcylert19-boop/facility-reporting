.PHONY: setup dev check test lint audit up down
setup:
	docker compose up -d --wait postgres
	composer --working-dir=apps/api install
	@if [ ! -f apps/api/.env ]; then cp apps/api/.env.example apps/api/.env; fi
	@if grep -q '^APP_KEY=$$' apps/api/.env; then composer --working-dir=apps/api exec -- php artisan key:generate; fi
	pnpm install --frozen-lockfile
	composer --working-dir=apps/api exec -- php artisan migrate --force
dev:
	pnpm dev
check:
	pnpm check
test:
	pnpm test
lint:
	pnpm lint
audit:
	pnpm audit
up:
	docker compose up -d --wait
down:
	docker compose down
