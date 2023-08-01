import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../core/models/comment.model";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit{

  @Input() comments!: Comment[];

  commentCtrl!: FormControl;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.commentCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(10)]);
  }

  onLeaveComment() {

  }
}
