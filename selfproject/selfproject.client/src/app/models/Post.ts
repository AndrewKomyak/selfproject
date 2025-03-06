export interface Post {
    id?: number;
    title: string;
    content: string;
    isAnonymous: boolean;
    AuthorId?: number;
}