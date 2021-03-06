package com.edu.invest.service.mapper;


import com.edu.invest.domain.*;
import com.edu.invest.service.dto.DocumentsDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Documents} and its DTO {@link DocumentsDTO}.
 */
@Mapper(componentModel = "spring", uses = {PackagesMapper.class})
public interface DocumentsMapper extends EntityMapper<DocumentsDTO, Documents> {

    @Mapping(source = "package.id", target = "packageId")
    DocumentsDTO toDto(Documents documents);

    @Mapping(source = "packageId", target = "package")
    Documents toEntity(DocumentsDTO documentsDTO);

    default Documents fromId(Long id) {
        if (id == null) {
            return null;
        }
        Documents documents = new Documents();
        documents.setId(id);
        return documents;
    }
}
