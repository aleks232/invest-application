package com.edu.invest.service.impl;

import com.edu.invest.service.PackagesService;
import com.edu.invest.domain.Packages;
import com.edu.invest.repository.PackagesRepository;
import com.edu.invest.service.dto.PackagesDTO;
import com.edu.invest.service.mapper.PackagesMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing {@link Packages}.
 */
@Service
@Transactional
public class PackagesServiceImpl implements PackagesService {

    private final Logger log = LoggerFactory.getLogger(PackagesServiceImpl.class);

    private final PackagesRepository packagesRepository;

    private final PackagesMapper packagesMapper;

    public PackagesServiceImpl(PackagesRepository packagesRepository, PackagesMapper packagesMapper) {
        this.packagesRepository = packagesRepository;
        this.packagesMapper = packagesMapper;
    }

    /**
     * Save a packages.
     *
     * @param packagesDTO the entity to save.
     * @return the persisted entity.
     */
    @Override
    public PackagesDTO save(PackagesDTO packagesDTO) {
        log.debug("Request to save Packages : {}", packagesDTO);
        Packages packages = packagesMapper.toEntity(packagesDTO);
        packages = packagesRepository.save(packages);
        return packagesMapper.toDto(packages);
    }

    /**
     * Get all the packages.
     *
     * @return the list of entities.
     */
    @Override
    @Transactional(readOnly = true)
    public List<PackagesDTO> findAll() {
        log.debug("Request to get all Packages");
        return packagesRepository.findAll().stream()
            .map(packagesMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one packages by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<PackagesDTO> findOne(Long id) {
        log.debug("Request to get Packages : {}", id);
        return packagesRepository.findById(id)
            .map(packagesMapper::toDto);
    }

    /**
     * Delete the packages by id.
     *
     * @param id the id of the entity.
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Packages : {}", id);
        packagesRepository.deleteById(id);
    }
}
