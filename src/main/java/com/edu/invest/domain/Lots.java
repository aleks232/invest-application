package com.edu.invest.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

/**
 * A Lots.
 */
@Entity
@Table(name = "lots")
public class Lots implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "description")
    private String description;

    @Column(name = "min_price")
    private Long minPrice;

    @Column(name = "start_date")
    private Instant startDate;

    @Column(name = "end_date")
    private Instant endDate;

    @OneToMany(mappedBy = "lot")
    private Set<Orders> orders = new HashSet<>();

    @OneToMany(mappedBy = "lot")
    private Set<Packages> packages = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties("lots")
    private Employee employee;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public Lots description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getMinPrice() {
        return minPrice;
    }

    public Lots minPrice(Long minPrice) {
        this.minPrice = minPrice;
        return this;
    }

    public void setMinPrice(Long minPrice) {
        this.minPrice = minPrice;
    }

    public Instant getStartDate() {
        return startDate;
    }

    public Lots startDate(Instant startDate) {
        this.startDate = startDate;
        return this;
    }

    public void setStartDate(Instant startDate) {
        this.startDate = startDate;
    }

    public Instant getEndDate() {
        return endDate;
    }

    public Lots endDate(Instant endDate) {
        this.endDate = endDate;
        return this;
    }

    public void setEndDate(Instant endDate) {
        this.endDate = endDate;
    }

    public Set<Orders> getOrders() {
        return orders;
    }

    public Lots orders(Set<Orders> orders) {
        this.orders = orders;
        return this;
    }

    public Lots addOrders(Orders orders) {
        this.orders.add(orders);
        orders.setLot(this);
        return this;
    }

    public Lots removeOrders(Orders orders) {
        this.orders.remove(orders);
        orders.setLot(null);
        return this;
    }

    public void setOrders(Set<Orders> orders) {
        this.orders = orders;
    }

    public Set<Packages> getPackages() {
        return packages;
    }

    public Lots packages(Set<Packages> packages) {
        this.packages = packages;
        return this;
    }

    public Lots addPackages(Packages packages) {
        this.packages.add(packages);
        packages.setLot(this);
        return this;
    }

    public Lots removePackages(Packages packages) {
        this.packages.remove(packages);
        packages.setLot(null);
        return this;
    }

    public void setPackages(Set<Packages> packages) {
        this.packages = packages;
    }

    public Employee getEmployee() {
        return employee;
    }

    public Lots employee(Employee employee) {
        this.employee = employee;
        return this;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Lots)) {
            return false;
        }
        return id != null && id.equals(((Lots) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Lots{" +
            "id=" + getId() +
            ", description='" + getDescription() + "'" +
            ", minPrice=" + getMinPrice() +
            ", startDate='" + getStartDate() + "'" +
            ", endDate='" + getEndDate() + "'" +
            "}";
    }
}
