package com.edu.invest.domain;


import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

/**
 * The Employee entity.
 */
@Entity
@Table(name = "accounts")
public class Accounts implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "login")
    private String login;

    @Column(name = "is_deleted")
    private Integer isDeleted;

    @Column(name = "password")
    private String password;

    @Column(name = "expired_date")
    private Instant expiredDate;

    @OneToMany(mappedBy = "account")
    private Set<Employee> employees = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public Accounts login(String login) {
        this.login = login;
        return this;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public Integer getIsDeleted() {
        return isDeleted;
    }

    public Accounts isDeleted(Integer isDeleted) {
        this.isDeleted = isDeleted;
        return this;
    }

    public void setIsDeleted(Integer isDeleted) {
        this.isDeleted = isDeleted;
    }

    public String getPassword() {
        return password;
    }

    public Accounts password(String password) {
        this.password = password;
        return this;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Instant getExpiredDate() {
        return expiredDate;
    }

    public Accounts expiredDate(Instant expiredDate) {
        this.expiredDate = expiredDate;
        return this;
    }

    public void setExpiredDate(Instant expiredDate) {
        this.expiredDate = expiredDate;
    }

    public Set<Employee> getEmployees() {
        return employees;
    }

    public Accounts employees(Set<Employee> employees) {
        this.employees = employees;
        return this;
    }

    public Accounts addEmployee(Employee employee) {
        this.employees.add(employee);
        employee.setAccount(this);
        return this;
    }

    public Accounts removeEmployee(Employee employee) {
        this.employees.remove(employee);
        employee.setAccount(null);
        return this;
    }

    public void setEmployees(Set<Employee> employees) {
        this.employees = employees;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Accounts)) {
            return false;
        }
        return id != null && id.equals(((Accounts) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Accounts{" +
            "id=" + getId() +
            ", login='" + getLogin() + "'" +
            ", isDeleted=" + getIsDeleted() +
            ", password='" + getPassword() + "'" +
            ", expiredDate='" + getExpiredDate() + "'" +
            "}";
    }
}
