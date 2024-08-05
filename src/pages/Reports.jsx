import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteData, loadDataFromLocalStorage } from '../redux/mySlice';
import { Table, Button, Autocomplete, Modal } from '@mantine/core';
import { FaEye } from "react-icons/fa";
import { useDisclosure } from '@mantine/hooks';
import FormDetail from '../components/FormDetail';
import { MdDelete } from "react-icons/md";

function Reports() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [searchCriteria, setSearchCriteria] = useState('');
  const { data } = useSelector((state) => state.lab);
  const {isAdmin}= useSelector((a)=>a.loginSlice)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDataFromLocalStorage());
  }, [dispatch]);

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === 'asc') {
      return new Date(a.raporTarihi) - new Date(b.raporTarihi);
    } else {
      return new Date(b.raporTarihi) - new Date(a.raporTarihi);
    }
  });
  const filteredData = sortedData.filter((element) => {
    if (searchCriteria === 'Hasta Adı- Soyadı') {
      return `${element.hastaAdi} ${element.hastaSoyadi}`.toLowerCase().includes(search.toLowerCase());
    } else if (searchCriteria === 'Hasta Kimlik Numarası') {
      return element.hastaTcNo && element.hastaTcNo.toString().includes(search.toLowerCase());
    }

    else if (searchCriteria === 'Laborant Adı-Soyadı') {
      return `${element.laborantAdi} ${element.laborantSoyAdi}`.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  });
  const rows = filteredData.map((element) => (
    <Table.Tr key={element.dosyaNumarasi}>
      <Table.Td>{element.hastaAdi} {element.hastaSoyadi}</Table.Td>
      <Table.Td>{element.laborantAdi} {element.laborantSoyAdi}</Table.Td>
      <Table.Td>{element.hastaTcNo}</Table.Td>
      <Table.Td>{element.raporTarihi}</Table.Td>
      <Table.Td>{element.taniDetaylari}</Table.Td>
      <Table.Td style={{ display: 'flex' }}>
        <FaEye
          onClick={() => {
            setSelectedDetail(element);
            open();
          }}
          style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', marginLeft: '10px', cursor: 'pointer', fontSize: '20px' }}
        />

{
  isAdmin ?        <MdDelete onClick={() => dispatch(deleteData(element.dosyaNumarasi))} size={20} cursor='pointer' style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginLeft: '10px' }} />
:null
}

      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '50px', marginTop: 40 }}>Rapor Kayıtları</h1>
      <Autocomplete
        style={{ marginBottom: '10px' }}
        label="Arama Kriteri"
        placeholder="Arama kriteri seçin"
        data={['Hasta Adı- Soyadı', 'Hasta Kimlik Numarası', 'Laborant Adı-Soyadı']}
        onChange={setSearchCriteria}
      />
      <Autocomplete
        style={{ marginBottom: '40px' }}
        label="Arama"
        placeholder="Aramak istediğiniz kriteri girin"
        value={search}
        onChange={setSearch}
        disabled={!searchCriteria}
      />
      <div style={{ marginBottom: '20px', flexDirection: 'row', width: '40%', alignItems: 'center' }}>
        <h3 style={{ textAlign: 'center' }}>Tarihe Gore Sirala</h3>
        <Button style={{ marginRight: '20px' }} onClick={() => handleSort('asc')}>Eskiden Yeniye</Button>
        <Button style={{ marginLeft: '20px' }} onClick={() => handleSort('desc')} >Yeniden Eskiye</Button>
      </div>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Hasta Adı-Soyadı</Table.Th>
            <Table.Th>Laborant Adı-Soyadı</Table.Th>
            <Table.Th>Hasta Kimlik Numarasi</Table.Th>
            <Table.Th>Rapor Tarihi</Table.Th>
            <Table.Th>Rapor Detay</Table.Th>
            <Table.Th>Rapor İşlem</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Modal size={'xl'} opened={opened} onClose={close} title="Rapor Detay">
        <FormDetail eleman={selectedDetail} />
      </Modal>
    </div>
  );
}

export default Reports;
