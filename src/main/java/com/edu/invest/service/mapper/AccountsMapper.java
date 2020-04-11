package com.edu.invest.service.mapper;


import com.edu.invest.domain.*;
import com.edu.invest.service.dto.AccountsDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Accounts} and its DTO {@link AccountsDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface AccountsMapper extends EntityMapper<AccountsDTO, Accounts> {


    @Mapping(target = "employees", ignore = true)
    @Mapping(target = "removeEmployee", ignore = true)
    Accounts toEntity(AccountsDTO accountsDTO);

    default Accounts fromId(Long id) {
        if (id == null) {
            return null;
        }
        Accounts accounts = new Accounts();
        accounts.setId(id);
        return accounts;
    }
}
