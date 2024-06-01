import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError } from 'rxjs/operators';
import { GetPosts, EnumPostAction, GetPostsSuccess } from '../actions/post.actions';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';

@Injectable()
export class PostEffect {
  constructor(
    private actions$: Actions,
    private postService: PostService
  ) {}

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType<GetPosts>(EnumPostAction.GetPosts),
      switchMap(() => 
        this.postService.fetchPosts().pipe(
          map((posts: Post[]) => new GetPostsSuccess(posts)),
        )
      )
    )
  );
}
