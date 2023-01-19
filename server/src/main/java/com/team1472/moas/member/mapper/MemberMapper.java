package com.team1472.moas.member.mapper;
import com.team1472.moas.member.dto.MemberDeleteDto;
import com.team1472.moas.member.dto.MemberPatchDto;
import com.team1472.moas.member.dto.MemberResponseDto;
import com.team1472.moas.member.dto.SimpleMemberResponseDto;
import com.team1472.moas.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);

    Member memberDeleteDtoToMember(MemberDeleteDto memberDeleteDto);
    default MemberResponseDto memberToMemberResponseDto(Member member) {
        if (member == null) {
            return null;
        }
        MemberResponseDto.MemberResponseDtoBuilder memberResponseDto = MemberResponseDto.builder();

        memberResponseDto.id(member.getId());
        memberResponseDto.email(member.getEmail());
        memberResponseDto.name(member.getName());
        memberResponseDto.picture(member.getPicture());

        return memberResponseDto.build();
    }

    default SimpleMemberResponseDto memberToSimpleMemberResponseDto(Member member) {
        if (member == null) {
            return null;
        }

        SimpleMemberResponseDto.SimpleMemberResponseDtoBuilder simpleMemberResponseDto = SimpleMemberResponseDto.builder();

        simpleMemberResponseDto.id(member.getId());
        simpleMemberResponseDto.email(member.getEmail());
        simpleMemberResponseDto.name(member.getName());
        simpleMemberResponseDto.picture(member.getPicture());
        simpleMemberResponseDto.role(member.getRole());
        simpleMemberResponseDto.createdAt(member.getCreatedAt());
        simpleMemberResponseDto.modifiedAt(member.getModifiedAt());


        return simpleMemberResponseDto.build();
    }

}
