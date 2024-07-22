package com.todotasks.todotasks.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "todotasks")
public class Todotask {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String taskDescription;

    public Todotask(String taskDescription) {
        this.taskDescription = taskDescription;
    }
}
