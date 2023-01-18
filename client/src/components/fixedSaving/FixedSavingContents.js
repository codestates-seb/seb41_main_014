import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
} from '@mui/material';
import { getFS_DATA, getWRAPPER_DATA } from '../../helper/fixedSavingHelper';
import { useState } from 'react';
import { DUMMY_FiexedSavings } from '../../data/dummies';
import { getLOCALE_MONEY, getPERCENT_WITH_TEXT } from '../../helper/unitHelper';
import GridColumn from './GridColumn';
import GridRow from './GridRow';
import FiexedSavingContentDetailItem from './FixedSavingContentDetailItem';

const FixedSavingContents = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const column = getFS_DATA();
  const rows = getWRAPPER_DATA(DUMMY_FiexedSavings);
  return (
    <Box
      sx={(theme) => ({
        width: '98.5%',
        height: 'auto',
        mt: 2,
        mb: 2,
        border: `4px solid ${theme.colors.mainMiddle}`,
        borderRadius: 2,
        backgroundColor: theme.colors.mainMiddle,
      })}
    >
      <Grid container>
        <GridColumn data={column.korCoNm.headerName} xs={3} column={column} />
        <GridColumn
          data={column.finPrdtNm.headerName}
          xs={3.5}
          column={column}
        />
        <GridColumn
          data={column.joinDeny.headerName}
          xs={1.5}
          column={column}
        />
        <GridColumn data={column.intrRate.headerName} xs={1} column={column} />
        <GridColumn
          data={column.intrRateTypeNm.headerName}
          xs={1}
          column={column}
        />
        <GridColumn
          data={column.interestAmount.headerName}
          xs={2}
          column={column}
        />
      </Grid>

      {rows.map((row) => (
        <Accordion
          key={row.id}
          sx={(theme) => ({
            backgroundColor: theme.colors.mainLight,
            borderRadius: 1,
            cursor: 'pointer',
            '&:hover': {
              opacity: 0.8,
            },
            '&:active': {
              opacity: 0.6,
            },
          })}
          expanded={expanded === row.id}
          onChange={handleChange(row.id)}
        >
          <AccordionSummary sx={{ p: 0 }}>
            <Grid
              container
              sx={() => ({
                display: 'flex',
                justifyContent: 'center',
              })}
            >
              <GridRow data={row.korCoNm} xs={3} />
              <GridRow data={row.finPrdtNm} xs={3.5} />
              <GridRow data={row.joinDeny} xs={1.5} align="center" />
              <GridRow
                data={getPERCENT_WITH_TEXT(row.intrRate)}
                xs={1}
                align="end"
              />
              <GridRow data={row.intrRateTypeNm} xs={1} align="center" />
              <GridRow
                data={getLOCALE_MONEY(row.interestAmount)}
                xs={2}
                align="end"
              />
            </Grid>
          </AccordionSummary>
          <AccordionDetails
            sx={(theme) => ({
              backgroundColor: theme.colors.white,
              borderRadius: 1,
              p: 2,
            })}
          >
            {Object.entries(row)
              .filter(
                (el) =>
                  el[0] === column.rsrvTypeNm.field ||
                  el[0] === column.joinWay.field ||
                  el[0] === column.spclCnd.field ||
                  el[0] === column.mtrtInt.field ||
                  el[0] === column.joinMember.field ||
                  el[0] === column.etcNote.field ||
                  el[0] === column.maxLimit.field ||
                  el[0] === column.intrRate2.field
              )
              .map((el) => (
                <FiexedSavingContentDetailItem
                  key={el[0]}
                  title={column[el[0]].headerName}
                  content={
                    el[0] === column.maxLimit.field
                      ? getLOCALE_MONEY(el[1])
                      : el[0] === column.intrRate2.field
                      ? getPERCENT_WITH_TEXT(el[1])
                      : el[1]
                  }
                />
              ))}
            <FiexedSavingContentDetailItem
              title={column.dcls_chrg_man.headerName}
              content={row.dcls_chrg_man}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FixedSavingContents;

/* DataGrid... 뷰 수정 실패 ㅡㅡ
        {/* <DataGrid
          sx={(theme) => ({
            boxShadow: 2,
            border: 4,
            borderColor: theme.colors.mainMiddle,
            borderRadius: 2,
          })}
          rows={rows}
          columns={columns}
          autoHeight
          checkboxSelection
          headerHeight={30}
          rowHeight={30}
        /> 
  */
