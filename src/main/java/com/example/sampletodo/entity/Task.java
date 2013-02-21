package com.example.sampletodo.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "t_task")
public class Task extends BaseEntity {

    private String title;

    private boolean done;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }
    
}
