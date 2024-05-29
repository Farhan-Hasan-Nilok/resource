// import mainRoutes from '@/routes/mainRoutes';
// import cors from './cors';
// import express, { Express } from 'express';
// class Server {
// 	private static instance: Server;
// 	private app: Express;

// 	private constructor() {
// 		this.app = express();
// 		this.setup();
// 	}

// 	private setup(): void {
// 		this.app.use(cors());
// 		this.app.use(express.json());
// 		this.app.use('/api', mainRoutes);
// 	}

// 	public static getInstance(): Server {
// 		if (!this.instance) {
// 			this.instance = new Server();
// 		}
// 		return Server.instance;
// 	}

// 	public getApp() {
// 		return this.app;
// 	}
// }

// export default Server.getInstance().getApp();
