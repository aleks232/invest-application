package com.edu.invest.service.dto;

import io.swagger.annotations.ApiModel;
import java.time.Instant;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link com.edu.invest.domain.Accounts} entity.
 */
@ApiModel(description = "The Employee entity.")
public class AccountsDTO implements Serializable {
    
    private Long id;

    private String login;

    private Integer isDeleted;

    private String password;

    private Instant expiredDate;

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public Integer getIsDeleted() {
        return isDeleted;
    }

    public void setIsDeleted(Integer isDeleted) {
        this.isDeleted = isDeleted;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Instant getExpiredDate() {
        return expiredDate;
    }

    public void setExpiredDate(Instant expiredDate) {
        this.expiredDate = expiredDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        AccountsDTO accountsDTO = (AccountsDTO) o;
        if (accountsDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), accountsDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "AccountsDTO{" +
            "id=" + getId() +
            ", login='" + getLogin() + "'" +
            ", isDeleted=" + getIsDeleted() +
            ", password='" + getPassword() + "'" +
            ", expiredDate='" + getExpiredDate() + "'" +
            "}";
    }
}
