package com.edu.invest.service.dto;

import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link com.edu.invest.domain.Documents} entity.
 */
public class DocumentsDTO implements Serializable {
    
    private Long id;

    private String title;

    private String description;

    private String type;


    private Long packageId;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getPackageId() {
        return packageId;
    }

    public void setPackageId(Long packagesId) {
        this.packageId = packagesId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        DocumentsDTO documentsDTO = (DocumentsDTO) o;
        if (documentsDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), documentsDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "DocumentsDTO{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", description='" + getDescription() + "'" +
            ", type='" + getType() + "'" +
            ", packageId=" + getPackageId() +
            "}";
    }
}
