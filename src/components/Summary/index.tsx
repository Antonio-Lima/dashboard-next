"use client";
import { useState } from "react";
import Image from "next/image";
import { Add } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Fade,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import * as zod from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { THEME } from "@/constants/theme";

import { getFormatedActualDate } from "@/utils";

import { AudienceType } from "@/@types";

import Button from "../Button";
import SummaryCard from "./Card";
import { schemaResearch } from "@/utils/schemas";

interface SummaryProps {
  running: string;
  scripting: number;
  audience: AudienceType;
  gridArea: string;
}

type ResearchFormData = zod.infer<typeof schemaResearch>;

export default function Summary({
  running,
  scripting,
  audience,
  gridArea,
}: SummaryProps) {
  const [runningValue, runningGoal] = running.split("/");
  const [isOpen, setIsOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ResearchFormData>({
    resolver: zodResolver(schemaResearch),
    defaultValues: { research: "" },
  });

  function onSubmit(form: ResearchFormData) {
    console.log(form);
    reset();
    setIsOpen(false);
  }

  return (
    <>
      <Box
        width="100%"
        bgcolor={THEME.colors.black}
        p="14px"
        pb="60px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="20px"
        gridArea={gridArea}
        sx={{
          [`@media ${THEME.mediaQuery.medium}`]: {
            flexDirection: "row",
            p: "22px",
            pb: "38px",
          },
        }}
      >
        <Box color={THEME.colors.white} maxWidth="731px" width="100%" mx="auto">
          <Typography
            fontWeight="regular"
            fontSize="0.625rem"
            lineHeight="0.75rem"
            fontFamily="Public Sans"
          >
            RESUMO MENSAL
          </Typography>
          <Typography
            textTransform="uppercase"
            fontWeight="bold"
            fontSize="1.375rem"
            lineHeight="1.625rem"
            fontFamily="Public Sans"
          >
            {getFormatedActualDate()}
          </Typography>
          <Box
            width="100%"
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gridTemplateAreas={`"a b" "c c"`}
            gap="20px"
            mt="16px"
            sx={{
              [`@media ${THEME.mediaQuery.medium}`]: {
                display: "flex",
              },
            }}
          >
            <SummaryCard
              value={Number(runningValue)}
              goal={Number(runningGoal)}
              title={
                <>
                  PESQUISAS <br /> EM CAMPO
                </>
              }
              hasMark
              variant="points"
              gridArea="a"
            />
            <SummaryCard
              value={scripting}
              goal={0}
              title={
                <>
                  PESQUISAS EM
                  <br />
                  ROTEIRIZAÇÃO
                </>
              }
              variant="none"
              gridArea="b"
            />
            <SummaryCard
              value={audience.sended}
              goal={audience.balance}
              title={
                <>
                  DISPAROS
                  <br />
                  FEITOS
                </>
              }
              variant="progression"
              gridArea="c"
            />
          </Box>
        </Box>
        <Box
          bgcolor={THEME.colors["purple-200"]}
          px="25px"
          pt="13px"
          pb="26px"
          width="100%"
          display="flex"
          maxWidth="731px"
          flexDirection="column"
          alignItems="center"
          gap="16px"
          borderRadius="4px"
          sx={{
            [`@media ${THEME.mediaQuery.medium}`]: {
              maxWidth: "345px",
            },
          }}
        >
          <Image
            src="/assets/images/stars.svg"
            alt="Stars"
            width={92}
            height={92}
          />
          <Typography
            fontWeight="bold"
            fontSize="1.125rem"
            color={THEME.colors.black}
            fontFamily="Public Sans"
            textAlign="center"
          >
            Pronto para conhecer seu cliente?
          </Typography>
          <Button
            label="Nova Pesquisa"
            icon={<Add />}
            onClick={() => setIsOpen(true)}
          ></Button>
        </Box>
      </Box>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Fade in={isOpen}>
          <Box
            p="24px"
            bgcolor={THEME.colors.white}
            borderRadius="4px"
            zIndex={99}
            width="100%"
            maxWidth="450px"
          >
            <Typography
              fontWeight="bold"
              fontSize="1.5rem"
              color={THEME.colors.black}
              fontFamily="Public Sans"
              textTransform="uppercase"
            >
              Nova Pesquisa
            </Typography>
            <Typography
              fontWeight="regular"
              fontSize="1rem"
              color={THEME.colors["gray-500"]}
              fontFamily="Public Sans"
              textAlign="center"
              mt="16px"
            >
              Crie uma nova pesquisa para <br /> conhecer seu cliente.
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name={"research"}
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <TextField
                      error={Boolean(errors.research?.message)}
                      helperText={errors.research?.message}
                      label="Digite sua pesquisa"
                      value={value}
                      onChange={onChange}
                      fullWidth
                      sx={{ marginTop: "24px" }}
                    />
                  );
                }}
              />
              <Box display="flex" gap="20px" mt="24px">
                <Button
                  color="secondary"
                  label="Salvar Rascunho"
                  type="submit"
                />
                <Button label="Criar Pesquisa" type="submit" />
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
