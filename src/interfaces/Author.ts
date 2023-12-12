import { Books } from "./Books";

export interface Author {
    author_id: number;
    author_name: string;
    books: Books[];
}