package com.example.sampletodo.entity;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "t_task")
public class Task extends BaseEntity {

    private String label;

    private String info;

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }


    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    
    
}
