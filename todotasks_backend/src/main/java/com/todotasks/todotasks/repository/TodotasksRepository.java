package com.todotasks.todotasks.repository;

import com.todotasks.todotasks.entity.Todotask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodotasksRepository extends JpaRepository<Todotask, Long> {

}
