build:
	@echo JWT_SECRET = "TEST" > server/.env
	@echo DATABASE_URL = "mongodb+srv://admin:5zaVgCQFkqlJW3Z1@cluster0.sbua2r4.mongodb.net/public?retryWrites=true&w=majority" >> server/.env
	@echo PORT = 5000 >> server/.env
	@echo SALT_ROUNDS = 12 >> server/.env
	
	npm start
