package com.todotasks.todotasks.controller;

import com.todotasks.todotasks.entity.Todotask;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.todotasks.todotasks.repository.TodotasksRepository;

import java.util.List;

@RestController
@RequestMapping("/api/v1/todotasks")
@CrossOrigin("http://localhost:3000")
public class TodotaskController {

    @Autowired
    TodotasksRepository todotasksRepository;

    @GetMapping()
    public List<Todotask> getAllTask() {
        return todotasksRepository.findAll();
    }

    @PostMapping()
    public Todotask addTodoTask(@RequestBody Todotask todotask) {
        return todotasksRepository.save(new Todotask(todotask.getTaskDescription()));
    }

    @PutMapping("/{id}")
    public Todotask updateTodoTask(@PathVariable Long id, @RequestBody Todotask todotask) {
        Todotask task = todotasksRepository.getById(id);
        task.setTaskDescription(todotask.getTaskDescription());
        return todotasksRepository.save(task);
    }

    @DeleteMapping("/{id}")
    public void deleteTodotask(@PathVariable Long id) {
        todotasksRepository.deleteById(id);
    }
}

