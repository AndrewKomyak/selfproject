import { HttpClient } from "@angular/common/http";
import { Post } from "../models/Post";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class PostsService {
    baseurl = 'https://localhost:7127/Posts'

    constructor(private httpClient: HttpClient) {
        
    }

    getAllPosts(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(this.baseurl);
    }

    getPostById(id: number): Observable<Post> {
        return this.httpClient.get<Post>(this.baseurl + '/' + id);
    }

    addNewPost(post: Post): Observable<any> {
        console.log('post service', post);
        return this.httpClient.post(this.baseurl, post);
    }
}