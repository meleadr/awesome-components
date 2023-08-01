import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Post} from "../models/post.model";
import {Observable} from "rxjs";

@Injectable()
export class PostService {
  constructor(private http:HttpClient) {
  }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>("http://localhost:3000/posts");
  }

}
